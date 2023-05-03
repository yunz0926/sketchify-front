import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import color from "../../styles/color";

interface Props {
  field: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

const AccountInput = ({ field, input, setInput }: Props) => {
  return (
    <Wrapper>
      <FieldText>{field}</FieldText>
      <StyledInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        spellCheck={false}
      />
    </Wrapper>
  );
};

export default AccountInput;

const Wrapper = styled.div``;

const StyledInput = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid ${color.base4};

  &:focus {
    outline: 2px solid ${color.base3};
  }
`;

const FieldText = styled.div`
  height: 36px;
  line-height: 36px;
  font-size: 20px;
  font-weight: 600;
  color: ${color.font};
  text-shadow: -1px 0 ${color.base4}, 0 1px ${color.base4}, 1px 0 ${color.base4},
    0 -1px ${color.base4};
`;
