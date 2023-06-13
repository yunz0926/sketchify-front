import styled from "styled-components";
import color from "../../styles/color";

const Spinner = () => {
  return <SpinnerAnimation />;
};

export default Spinner;

const SpinnerAnimation = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 50%;
  transform-origin: 50%;

  margin-left: -21px;
  margin-top: -21px;
  border-radius: 50%;

  border: 10px solid ${color.base4};
  border-top-color: transparent;
  border-left-color: transparent;

  animation: Rotate 0.8s infinite linear;
  z-index: 100;

  @keyframes Rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
