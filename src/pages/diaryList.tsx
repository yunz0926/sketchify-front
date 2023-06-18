import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import color from "../styles/color";
import edit from "../assets/edit.svg";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";
import DiaryItem from "../components/diaryList/DiaryItem";
import DateComp from "../components/diaryList/Date";
import service from "../services";
import { useEffect } from "react";
import useDiaryStore, { DiaryT } from "../stores/DiaryStore";

const DiaryList = () => {
  const navigate = useNavigate();
  const { diary } = service;
  const { month, setDiaries, setSelectedDiary } = useDiaryStore();

  const [filteredDiaries, setFilteredDiaries] = useState<DiaryT[]>([]);

  const initDiaries = async () => {
    const diaries: DiaryT[] = await diary.getDiaries();
    setDiaries(diaries);

    const filtered = diaries
      .filter(
        (diary: DiaryT) => new Date(diary.created_at).getMonth() + 1 === month
      )
      .sort(
        (a: DiaryT, b: DiaryT) =>
          +new Date(a.created_at) - +new Date(b.created_at)
      );
    console.log("filtered", filtered);
    setFilteredDiaries(filtered);
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
  }, [month]);

  return (
    <Flex d="column" style={{ padding: "10px 30px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="15px" />
      <Flex j="space-between" style={{ position: "relative" }}>
        <DateComp />
        <img
          alt="edit"
          src={edit}
          style={{ paddingRight: 10 }}
          onClick={goToChat}
        />
      </Flex>
      <Space h="30px" />
      <ListWrapper j="center">
        {filteredDiaries.map((item, idx) => {
          return (
            <DiaryItem
              item={item}
              idx={idx}
              onClick={() => onClickItem(item)}
            />
          );
        })}
        {filteredDiaries.length % 2 === 1 && (
          <div
            style={{
              width: 154,
              height: 134,
              borderTop:
                filteredDiaries.length === 1 ? "" : `1px dashed ${color.dash}`,
            }}
          ></div>
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
