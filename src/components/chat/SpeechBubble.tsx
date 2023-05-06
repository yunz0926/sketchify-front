import { HTMLProps } from "react";
import styled from "styled-components";
import color from "../../styles/color";

interface Props extends HTMLProps<HTMLDivElement> {
  dir: "left" | "right";
}

const SpeechBubble = (props: Props) => {
  return (
    <Style>
      <div className={`${props.dir}-bubble`}>{props.children}</div>
    </Style>
  );
};

export default SpeechBubble;

const Style = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 20px;
  line-height: 22px;
  color: #3d3d3d;

  .left-bubble {
    position: relative;
    left: 30px;
    width: 210px;
    padding: 20px;
    background: ${color.base3};
    -webkit-border-radius: 19px;
    -moz-border-radius: 19px;
    border-radius: 19px;
  }

  .left-bubble:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 11px 28px 11px 0;
    border-color: transparent ${color.base3};
    display: block;
    width: 0;
    z-index: 1;
    left: -28px;
    top: 21px;
  }

  .right-bubble {
    position: relative;
    right: -30px;
    width: 210px;
    padding: 20px;
    background: #ffffff;
    -webkit-border-radius: 19px;
    -moz-border-radius: 19px;
    border-radius: 19px;
    border: #abc4aa solid 2px;
  }

  .right-bubble:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 11px 0 11px 28px;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    right: -28px;
    top: 21px;
  }

  .right-bubble:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 12px 0 12px 29px;
    border-color: transparent ${color.base3};
    display: block;
    width: 0;
    z-index: 0;
    right: -31px;
    top: 20px;
  }
`;
