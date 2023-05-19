import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import Register from "./pages/register";
import DiaryList from "./pages/diaryList";
import DiaryDetail from "./pages/diaryDetail";
import Chat from "./pages/chat";
import Image from "./pages/image";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/diary" element={<DiaryList />} />
        <Route path="/diary-detail" element={<DiaryDetail />} />
        <Route path="/img" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
