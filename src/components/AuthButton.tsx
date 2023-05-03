import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("click");
    navigate("/login");
  };
  return <Button onClick={onClick}>로그인</Button>;
};

export default AuthButton;
