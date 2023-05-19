import { useEffect, useRef } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import SpeechBubble from "./SpeechBubble";
import useChatStore from "../../stores/ChatStore";

const Chattings = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { chats } = useChatStore();

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <Wrapper ref={wrapperRef}>
      {chats.map((chat, idx) => (
        <SpeechBubble dir={idx % 2 === 0 ? "left" : "right"}>
          {chat.content}
        </SpeechBubble>
      ))}
    </Wrapper>
  );
};

export default Chattings;

const Wrapper = styled.div`
  height: 650px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px 30px;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${color.gray}; /*스크롤바의 색상*/
    border-radius: 5px;
  }
`;
