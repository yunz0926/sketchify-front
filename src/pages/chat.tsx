import styled from "styled-components";
import transparentDiary from "../assets/transparent_diary.svg";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import Chattings from "../components/chat/Chattings";
import AudioRecord from "../components/chat/AudioRecord";

const Chat = () => {
  return (
    <Background d="column" style={{ padding: "10px 0px" }}>
      <Flex j="flex-end" style={{ paddingRight: "30px" }}>
        <AuthButton />
      </Flex>
      <Space h="30px" />
      <Chattings />
      <Space h="30px" />
      <AudioRecord />
    </Background>
  );
};

export default Chat;

const Background = styled(Flex)`
  background-image: url(${transparentDiary});
  height: 800px;
  background-position: center center;
  background-repeat: no-repeat;
`;
