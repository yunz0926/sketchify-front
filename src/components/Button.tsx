import styled from "styled-components";
import color from "../styles/color";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <Wrapper style={props.style} onClick={props.onClick}>
      {props.children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  padding: 6px 10px;
  border-radius: 32px;
  background-color: ${color.base3};
  color: ${color.font};
  font-size: 13px;
  font-weight: 700;

  cursor: pointer;
  border: none;
`;
