import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lockedDiary from "../assets/locked_diary.svg";
import { Flex, Space } from "../components/common";
import AccountInput from "../components/account/AccountInput";
import Button from "../components/Button";
import service from "../services";

const Register = () => {
  const navigate = useNavigate();
  const { auth } = service;
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const register = () => {
    if (password !== passwordConfirm) {
      console.error("비밀번호가 다릅니다.");
      return;
    }
    auth.signUp({ user_name: id, user_password: password });
    navigate("/");
  };

  return (
    <Background>
      <Flex d="column" style={{ padding: "10px 30px" }}>
        <Flex a="center" d="column">
          <Space h="190px" />
          <AccountInput field="아이디" input={id} setInput={setId} />
          <Space h="20px" />
          <AccountInput
            field="비밀번호"
            input={password}
            setInput={setPassword}
          />
          <Space h="20px" />
          <AccountInput
            field="비밀번호 확인"
            input={passwordConfirm}
            setInput={setPasswordConfirm}
          />
          <Space h="50px" />
          <Button
            style={{ width: 100, fontSize: 18, borderRadius: 15 }}
            onClick={register}
          >
            회원가입
          </Button>
        </Flex>
      </Flex>
    </Background>
  );
};

export default Register;

const Background = styled.div`
  background-image: url(${lockedDiary});
  height: 500px;
  background-position: 0 0;
  background-repeat: no-repeat;
`;
