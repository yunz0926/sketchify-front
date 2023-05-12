import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lockedDiary from "../assets/locked_diary.svg";
import { Flex, Space } from "../components/common";
import AccountInput from "../components/account/AccountInput";
import Button from "../components/Button";
import service from "../services";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = service;

  const login = async () => {
    const req = { user_name: id, user_password: password };
    const res = await auth.signIn(req);

    if (res.status !== 200) return;

    const { accessToken } = res.data;

    localStorage.setItem("accessToken", accessToken);

    navigate("/");
  };

  return (
    <Background>
      <Flex d="column" style={{ padding: "10px 30px" }}>
        <Flex a="center" d="column">
          <Space h="270px" />
          <AccountInput field="아이디" input={id} setInput={setId} />
          <Space h="20px" />
          <AccountInput
            field="비밀번호"
            input={password}
            setInput={setPassword}
          />
          <Space h="50px" />
          <Button
            style={{ width: 90, fontSize: 18, borderRadius: 15 }}
            onClick={login}
          >
            로그인
          </Button>
        </Flex>
      </Flex>
    </Background>
  );
};

export default Login;

const Background = styled.div`
  background-image: url(${lockedDiary});
  height: 500px;
  background-position: 0 0;
  background-repeat: no-repeat;
`;
