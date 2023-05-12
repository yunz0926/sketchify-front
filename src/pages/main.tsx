import { useNavigate } from "react-router-dom";
import diary from "../assets/diary.svg";
import { Flex, Space } from "../components/common";
import AuthButton from "../components/AuthButton";

const Main = () => {
  const navigate = useNavigate();

  const onClick = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) navigate("/diary");
    else navigate("/login");
  };
  return (
    <Flex d="column" style={{ padding: "10px 30px" }}>
      <Flex j="flex-end">
        <AuthButton />
      </Flex>
      <Space h="100px" />
      <Flex a="center" j="center" onClick={onClick}>
        <img alt="diary" src={diary} />
      </Flex>
    </Flex>
  );
};

export default Main;
