import { useEffect, useRef } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import SpeechBubble from "./SpeechBubble";
import useChatStore from "../../stores/ChatStore";

const Chattings = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { chats, initChat } = useChatStore();

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [chats]);

  useEffect(() => {
    initChat({
      role: "system",
      content: `안녕하세요, ${localStorage.getItem(
        "userName"
      )}님. 일기 작성을 도와드리겠습니다. 어떤 일이 있으셨나요? 이야기를 들려주세요.`,
    });
  }, []);

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
