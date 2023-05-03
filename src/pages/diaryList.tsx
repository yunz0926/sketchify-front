import styled from "styled-components";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import DiaryItem from "../components/diaryList/DiaryItem";
import Date from "../components/diaryList/Date";

const mock = [
  { date: "03/05" },
  { date: "03/07" },
  { date: "03/10" },
  { date: "03/11" },
  { date: "03/13" },
  { date: "03/17" },
  { date: "03/20" },
  { date: "03/21" },
  { date: "03/21" },
  { date: "03/21" },
  { date: "03/21" },
  { date: "03/21" },
];

const DiaryList = () => {
  return (
    <Flex d="column" style={{ padding: "10px 30px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="15px" />
      <Date />
      <Space h="30px" />
      <ListWrapper j="center">
        {mock.map((item, idx) => (
          <DiaryItem date={item.date} idx={idx} />
        ))}
      </ListWrapper>
    </Flex>
  );
};

export default DiaryList;

const ListWrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
`;
