import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import Image from "../components/diaryDetail/Image";
import Content from "../components/diaryDetail/Content";
import Date from "../components/diaryDetail/Date";

const DiaryDetail = () => {
  return (
    <Flex d="column" style={{ padding: "10px 0px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="50px" />
      <Flex a="center" d="column">
        <Date />
        <Image />
        <Content />
      </Flex>
    </Flex>
  );
};

export default DiaryDetail;
