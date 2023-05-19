import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import color from "../../styles/color";
import done from "../../assets/done.svg";
import { Flex, Space } from "../common";
import useChatStore from "../../stores/ChatStore";
import service from "../../services";

const ImageSelect = () => {
  const { diary } = service;
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const { imgs, koreanDiary } = useChatStore();

  const generateDiary = async () => {
    const res = await diary.createDiary({
      diary_img: imgs[selectedImg],
      diary_content: koreanDiary,
    });

    navigate("/diary");
  };
  return (
    <Flex a="center" d="column">
      <Description>일기에 넣을 그림을 선택해주세요.</Description>
      <Space h="20px" />
      <Flex a="center" d="column" g="20px">
        {imgs.map((img, idx) => (
          <Img
            alt={`img-${idx}`}
            src={img}
            width={150}
            onClick={() => setSelectedImg(idx)}
            selected={idx === selectedImg}
          />
        ))}
      </Flex>
      <Space h="50px" />
      <Button j="center" a="center" onClick={generateDiary}>
        <img alt="submit" src={done} />
      </Button>
    </Flex>
  );
};

export default ImageSelect;

const Description = styled.div`
  color: ${color.base4};
  font-size: 23;
  font-weight: 700;
`;

const Img = styled.img<{ selected: boolean }>`
  ${({ selected }) => selected && `border: 10px solid ${color.base3}`}
`;

const Button = styled(Flex)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${color.base3};
`;
