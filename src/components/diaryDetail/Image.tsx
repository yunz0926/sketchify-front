import styled from "styled-components";
import color from "../../styles/color";
import mock from "../../assets/mock.svg";
import { Flex } from "../common";

const Image = () => {
  return (
    <Wrapper j="center">
      <img alt="mock" src={mock} width={359} />
    </Wrapper>
  );
};

export default Image;

const Wrapper = styled(Flex)`
  width: 359px;
  height: 300px;
  border-top: 1px solid ${color.base4};
  border-left: 1px solid ${color.base4};
  border-right: 1px solid ${color.base4};
`;
