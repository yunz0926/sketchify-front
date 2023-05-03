import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import color from "../../styles/color";
import mock from "../../assets/mock.svg";
import { Flex } from "../common";

interface Props {
  date: string;
  idx: number;
}

const DiaryItem = ({ date, idx }: Props) => {
  const navigate = useNavigate();
  const isLeft = idx % 2 === 0;
  const isTop = idx === 0 || idx === 1;

  const onClick = () => {
    navigate("/diary-detail");
  };

  return (
    <Wrapper isLeft={isLeft} isTop={isTop} onClick={onClick}>
      <Item>
        <Date j="center" a="center">
          {date}
        </Date>
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

const Date = styled(Flex)`
  width: 44px;
  height: 20px;
  color: ${color.font};
  font-size: 14px;
  font-weight: 500;
  background-color: ${color.base1};
`;

const Item = styled.div`
  width: 134px;
  height: 134px;
  background-image: url(${mock});
  background-size: cover;
  background-position: center;
`;
