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

const AudioRecord = () => {
  const { ai } = service;
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const { chats, updateChat, setKoreanDiary, setEnglishDiary, setImgs } =
    useChatStore();
  const [turn, setTurn] = useState(1);

  const generateImage = async () => {
    const str = `한국어로 작성한 일기:

    <오늘은 오랜만에 친구들과 놀아서 정말 기분이 좋았어. 카페에서 맛있는 커피도 마시고, 영화도 보고 왔는데 정말 즐거웠다. 다음에 또 같이 놀자는 약속도 잡았으니 더 기대가 된다.>
    
    영어로 작성한 일기:
    
    <Today, I had a great time with my friends, which I haven't seen for a while. We went to a cafe and had some nice coffee, then we watched a movie in the theater. It was really enjoyable, and I feel so good right now. We also made a promise to hang out again, which makes me even more excited.>`;
    const arr = str.split(/<|>/);
    setKoreanDiary(arr[1]);
    setEnglishDiary(arr[3]);

    const res = await ai.generateImage({ messages: arr[3] });

    setImgs([res.image0, res.image1, res.image2]);
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
    SpeechRecognition.stopListening();
    console.log("trascript", transcript);

    const message: MessageT = { role: "user", content: transcript };
    const messages = [...chats, message];
    console.log("messages", messages);

    const res = await ai.chatGPT({
      user_name: "윤지",
      messages: messages,
    });

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
