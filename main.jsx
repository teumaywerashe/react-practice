// import React from "react";

function ChatBot() {
  return (
    <>
      <input placeholder="send your message" />
      <button>send</button>
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

function ChatMessages() {
  const [chatMessages, setChatMessages] = React.useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    {
      message: "can you tell me what today ising",
      sender: "user",
      id: "id3",
    },
    {
      message: "Sorry, I didn't quite understand that.",
      sender: "robot",
      id: "id4",
    },
  ]);

  function SendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: "just testintg the function",
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }
  // console.log(chatMessages);

  
  return (
    <>
    <button onClick={SendMessage} >send message</button>
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
  return (
    <>
      <ChatBot />
      <ChatMessages />
    </>
  );
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
