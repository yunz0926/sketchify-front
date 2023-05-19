import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";

interface Props {
  url?: string;
}

const Image = ({ url }: Props) => {
  return (
    <Wrapper j="center">
      <img alt="diary-img" src={url} width={359} />
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
