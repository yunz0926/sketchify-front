import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import edit from "../assets/edit.svg";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import DiaryItem from "../components/diaryList/DiaryItem";
import Date from "../components/diaryList/Date";
import service from "../services";
import { useEffect } from "react";
import useDiaryStore, { DiaryT } from "../stores/DiaryStore";

const DiaryList = () => {
  const navigate = useNavigate();
  const { diary } = service;
  const { diaries, setDiaries, setSelectedDiary } = useDiaryStore();

  const initDiaries = async () => {
    const diaries = await diary.getDiaries();
    setDiaries(diaries);
  };

  const goToChat = () => {
    navigate("/chat");
  };

  const onClickItem = async (item: DiaryT) => {
    setSelectedDiary(item);
    navigate("/diary-detail");
  };

  useEffect(() => {
    initDiaries();
  }, []);

  return (
    <Flex d="column" style={{ padding: "10px 30px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="15px" />
      <Flex j="space-between" style={{ position: "relative" }}>
        <Date />
        <img
          alt="edit"
          src={edit}
          style={{ paddingRight: 10 }}
          onClick={goToChat}
        />
      </Flex>
      <Space h="30px" />
      <ListWrapper j="center">
        {diaries.map((item, idx) => {
          return (
            <DiaryItem
              item={item}
              idx={idx}
              onClick={() => onClickItem(item)}
            />
          );
        })}
        {diaries.length % 2 === 1 && (
          <div style={{ width: 154, height: 134 }}></div>
        )}
      </ListWrapper>
    </Flex>
  );
};

export default DiaryList;

const ListWrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  width: 330px;
`;
