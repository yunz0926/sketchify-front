import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  values: number[];
  onValueClick: (value: number) => void;
}

const DropDown = (props: Props) => {
  return (
    <Wrapper style={props.style}>
      <Flex d="column">
        {props.values.map((value) => (
          <Value
            j="center"
            a="center"
            onClick={() => {
              props.onValueClick(value);
            }}
          >
            {value}
          </Value>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled(Flex)`
  position: absolute;
  top: 40px;
  width: 100px;
  height: 150px;
  background: white;
  border: 1px solid ${color.base3};
  border-radius: 10px;
  z-index: 1;
  overflow: scroll;
`;

const Value = styled(Flex)`
  width: 100px;
  padding: 3px 0px;
  color: ${color.base4};
  font-size: 16px;
  font-weight: 600;
`;
