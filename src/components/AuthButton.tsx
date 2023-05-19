import { useNavigate } from "react-router-dom";
import { Flex } from "./common";
import Button from "./Button";
import { useMemo } from "react";

const AuthButton = () => {
  const navigate = useNavigate();
  const accessToken = useMemo(
    () => localStorage.getItem("accessToken"),
    [localStorage]
  );

  const onClickRegister = () => {
    navigate("/register");
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      {accessToken ? (
        <Button onClick={onClickLogout}>로그아웃</Button>
      ) : (
        <Flex g="8px">
          <Button onClick={onClickRegister}>회원가입</Button>
          <Button onClick={onClickLogin}>로그인</Button>
        </Flex>
      )}
    </>
  );
};

export default AuthButton;
