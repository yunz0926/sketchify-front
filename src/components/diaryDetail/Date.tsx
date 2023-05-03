import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";

const Date = () => {
  return (
    <Wrapper a="center">
      <Text>2023년 3월 5일 일요일</Text>
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
