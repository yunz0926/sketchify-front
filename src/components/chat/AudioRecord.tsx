import React, { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { useNavigate } from "react-router-dom";
import mic from "../../assets/mic.svg";
import done from "../../assets/done.svg";
import { Flex } from "../common";
import service from "../../services";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { MessageT } from "../../services/ai/type";
import useChatStore from "../../stores/ChatStore";
import Spinner from "./Spinner";

const AudioRecord = () => {
  const { ai } = service;
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const { chats, updateChat, setKoreanDiary, setEnglishDiary, setImgs } =
    useChatStore();
  const [turn, setTurn] = useState(1);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    const generatedDiary = chats[chats.length - 1].content;

    const arr = generatedDiary.split(/<|>/);
    console.log("arr", arr);
    setKoreanDiary(arr[2]);
    setEnglishDiary(arr[4]);

    const res = await ai.generateImage({ messages: arr[4] });

    setImgs([res.image0, res.image1, res.image2]);
    console.log(res);
    navigate("/img");
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startRecording = () => {
    setIsRecording(true);
    SpeechRecognition.startListening();
  };

  const stopRecording = async () => {
    setIsRecording(false);
    setLoading(true);
    SpeechRecognition.stopListening();
    console.log("trascript", transcript);

    const message: MessageT = { role: "user", content: transcript };
    const messages = [...chats, message];
    console.log("messages", messages);

    const res = await ai.chatGPT({
      user_name: localStorage.getItem("userName") || "",
      messages: messages,
    });

    setLoading(false);

    if (turn === 3) {
      console.log("res", res[0]);
    }
    console.log("chats", chats);
    updateChat(message);
    updateChat(res[0]);

    resetTranscript();
    setTurn(turn + 1);
  };

  return (
    <>
      <Flex g="20px" j="center">
        <Button
          j="center"
          a="center"
          isRecording={listening}
          onClick={isRecording ? stopRecording : startRecording}
        >
          <img alt="mic" src={mic} />
        </Button>
        <Button j="center" a="center" onClick={generateImage}>
          <img alt="submit" src={done} />
        </Button>
      </Flex>
      {loading && <Spinner />}
    </>
  );
};

export default AudioRecord;

const Button = styled(Flex)<{ isRecording?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${color.base3};

  ${({ isRecording }) =>
    isRecording !== undefined && isRecording && `opacity: 0.5; `}
`;
