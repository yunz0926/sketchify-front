import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";
import { DiaryT } from "../../stores/DiaryStore";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  item: DiaryT;
  idx: number;
}

const DiaryItem = ({ item, idx, onClick }: Props) => {
  const isLeft = idx % 2 === 0;
  const isTop = idx === 0 || idx === 1;

  const offset = 1000 * 60 * 60 * 9;
  const date = new Date(new Date(item.created_at).getTime() + offset);

  return (
    <Wrapper isLeft={isLeft} isTop={isTop} onClick={onClick}>
      <Item img_url={item.diary_img}>
        <DateText j="center" a="center">
          {date.getUTCMonth() + 1} / {date.getUTCDate()}
        </DateText>
      </Item>
    </Wrapper>
  );
};

export default DiaryItem;

const Wrapper = styled.div<{ isLeft: boolean; isTop: boolean }>`
  ${({ isLeft }) =>
    isLeft
      ? `padding-right: 20px; border-right: 1px dashed ${color.dash};`
      : "padding-left: 20px;"}
  ${({ isTop }) =>
    !isTop && `border-top: 1px dashed ${color.dash}; padding-top: 20px;`}
  padding-bottom: 20px;
`;

const DateText = styled(Flex)`
  width: 44px;
  height: 20px;
  color: ${color.font};
  font-size: 14px;
  font-weight: 500;
  background-color: ${color.base1};
`;

const Item = styled.div<{ img_url: String }>`
  width: 134px;
  height: 134px;
  ${({ img_url }) => `background-image: url(${img_url});`}
  background-size: cover;
  background-position: center;
`;
