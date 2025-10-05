// import React from "react";
import SmartChatbot from "./SmartChatbot.js";

function ChatBot({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState("");
  function saveChage(e) {
    setInputText(e.target.value);
  }
  function sendMessage() {
    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessage);
setInputText('')
    const response = SmartChatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <>
      <input
        placeholder="send your message"
        onChange={saveChage}
        value={inputText}
      />
      <button onClick={sendMessage}>send</button>
    </>
  );
}

function ChatMessage(props) {
  const { message, sender } = props;
  return (
    <>
      <div>
        {sender === "robot" && <img src="robot.png" width="40" />}
        {message}
        {sender === "user" && <img src="user.png" width="40" />}
      </div>
    </>
  );
}

function ChatMessages({ chatMessages }) {
  // console.log(chatMessages);

  return (
    <>
      {chatMessages.map((chat) => {
        return (
          <ChatMessage
            key={chat.id}
            message={chat.message}
            sender={chat.sender}
          />
        );
      })}
    </>
  );
}
function App() {
  const [chatMessages, setChatMessages] = React.useState([
    {
      message: "",
      sender: "",
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <>
      <ChatBot chatMessages={chatMessages} setChatMessages={setChatMessages} />
      <ChatMessages chatMessages={chatMessages} />
    </>
  );
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
