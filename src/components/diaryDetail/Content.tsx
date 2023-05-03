import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";

const Content = () => {
  const content = "오늘은 넷플릭스를 보며 힐링의 하루를 보냈다.";
  const splitedContent = content
    .split("")
    .concat(Array(70 - content.length).fill(" "));

  return (
    <Wrapper>
      {splitedContent.map((letter) => (
        <Letter j="center" a="center">
          {letter}
        </Letter>
      ))}
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled(Flex)`
  width: 360px;
  height: 252px;
  border-left: 1px solid ${color.base4};
  border-top: 1px solid ${color.base4};
  flex-wrap: wrap;
`;

const Letter = styled(Flex)`
  width: 35px;
  height: 35px;
  color: ${color.base4};
  border-right: 1px solid ${color.base4};
  border-bottom: 1px solid ${color.base4};
`;
