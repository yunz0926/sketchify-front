import styled from "styled-components";
import transparentDiary from "../assets/transparent_diary.svg";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import ImageSelect from "../components/image/ImageSelect";

const Image = () => {
  return (
    <Background d="column" style={{ padding: "10px 30px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="50px" />
      <ImageSelect />
    </Background>
  );
};

const Background = styled(Flex)`
  background-image: url(${transparentDiary});
  height: 800px;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default Image;
