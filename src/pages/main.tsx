import diary from "../assets/diary.svg";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";

const Main = () => {
  return (
    <Flex d="column" style={{ padding: "10px 30px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="100px" />
      <Flex a="center" j="center">
        <img alt="diary" src={diary} />
      </Flex>
    </Flex>
  );
};

export default Main;
