import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import Image from "../components/diaryDetail/Image";
import Content from "../components/diaryDetail/Content";
import DateText from "../components/diaryDetail/Date";
import useDiaryStore from "../stores/DiaryStore";

const DiaryDetail = () => {
  const { selectedDiary } = useDiaryStore();

  return (
    <Flex d="column" style={{ padding: "10px 0px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="50px" />
      <Flex a="center" d="column">
        <DateText
          d={selectedDiary ? new Date(selectedDiary.created_at) : new Date()}
        />
        <Image url={selectedDiary?.diary_img} />
        <Content content={selectedDiary?.diary_content || ""} />
      </Flex>
    </Flex>
  );
};

export default DiaryDetail;
