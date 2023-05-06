import SpeechBubble from "./SpeechBubble";

const Chattings = () => {
  const chats = [
    "안녕하세요, 윤지님. 일기 작성을 도와드리겠습니다. 어떤 일이 있으셨나요? 이야기를 들려주세요.",
    "오늘은 전시회에 갔어",
    "전시회에 가서 즐거운 시간을 보내셨군요. 그러면 오늘 윤지님의 기분은 어떤가요? 기쁘셨을까요? 아니면 다른 감정이 드시나요? 이야기를 들려주세요.",
    "음 오랜만에 전시회를 가서 굉장히 재밌었어. 앞으로 자주 전시회를 다녀야겠더라!",
    "혹시 더 하시고 싶으신 얘기가 있으면 얘기해주세요.",
    "아니야 더 없는 것 같아",
    "오늘의 일기를 마칠게요!",
  ];

  return (
    <div style={{ height: 650, overflowY: "scroll", overflowX: "hidden" }}>
      {chats.map((chat, idx) => (
        <SpeechBubble dir={idx % 2 === 0 ? "left" : "right"}>
          {chat}
        </SpeechBubble>
      ))}
    </div>
  );
};

export default Chattings;
