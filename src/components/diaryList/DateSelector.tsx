import styled from "styled-components";
import color from "../../styles/color";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  onClick: () => void;
}

const DateSelector = (props: Props) => {
  return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
};

export default DateSelector;

const Wrapper = styled.div`
  padding: 0 20px;
  height: 31px;
  line-height: 31px;
  border-radius: 31px;
  background-color: ${color.base3};
  color: ${color.font};
  font-size: 16px;
  font-weight: 600;
`;
