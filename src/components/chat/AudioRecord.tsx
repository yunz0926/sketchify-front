import React, { useState, useCallback } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import mic from "../../assets/mic.svg";
import done from "../../assets/done.svg";
import { Flex } from "../common";

const AudioRecord = () => {
  const [stream, setStream] = useState<any>();
  const [media, setMedia] = useState<any>();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState<any>();
  const [analyser, setAnalyser] = useState<any>();
  const [audioUrl, setAudioUrl] = useState<any>();

  const onRecAudio = () => {
    const audioCtx = new window.AudioContext();
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream: any) {
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyser.onaudioprocess = function (e) {
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          analyser.disconnect();
          audioCtx.createMediaStreamSource(stream).disconnect();

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  const offRecAudio = () => {
    media.ondataavailable = function (e: any) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    stream.getAudioTracks().forEach(function (track: any) {
      track.stop();
    });

    media.stop();
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      console.log(URL.createObjectURL(audioUrl));
    }
    const sound = new File([audioUrl], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio",
    });
    console.log(sound);
  }, [audioUrl]);

  return (
    <Flex g="20px" j="center">
      <Button
        j="center"
        a="center"
        onRec={onRec}
        onClick={onRec ? onRecAudio : offRecAudio}
      >
        <img alt="mic" src={mic} />
      </Button>
      <Button j="center" a="center">
        <img alt="submit" src={done} />
      </Button>
    </Flex>
  );
};

export default AudioRecord;

const Button = styled(Flex)<{ onRec?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${color.base3};

  ${({ onRec }) => onRec !== undefined && !onRec && `opacity: 0.5; `}
`;
