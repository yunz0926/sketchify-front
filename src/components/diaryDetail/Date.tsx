import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";

interface Props {
  d: Date;
}

const Date = ({ d }: Props) => {
  const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const date = d.getUTCDate();
  const day = dayArr[d.getUTCDay()];

  return (
    <Wrapper a="center">
      <Text>
        {year}년 {month}월 {date}일 {day}요일
      </Text>
    </Wrapper>
  );
};

export default Date;

const Wrapper = styled(Flex)`
  width: 339px;
  height: 50px;
  padding-left: 20px;
  border-top: 1px solid ${color.base4};
  border-left: 1px solid ${color.base4};
  border-right: 1px solid ${color.base4};
`;

const Text = styled.div`
  color: ${color.base4};
  font-weight: 500;
`;
