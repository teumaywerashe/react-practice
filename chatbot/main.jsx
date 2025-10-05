// import React from "react";

function ChatBot({ messages, setMessages }) {
  const [text, setText] = React.useState("");
  function saveChange(event) {
    setText(event.target.value);
  }
  function EventHandler(key) {}
  function sendMessage() {
    const newMessage = [
      ...messages,
      { message: text, sender: "user", id: crypto.randomUUID() },
    ];
    setMessages(newMessage);
    setText("");
    const response = Chatbot.getResponse(text);
    setMessages([
      ...newMessage,
      { message: response, sender: "robot", id: crypto.randomUUID() },
    ]);
  }
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="what is your question"
        onChange={saveChange}
        value={text}
      />
      <button className="send-button" onClick={sendMessage}>
        send
      </button>
    </div>
  );
}
function ChatMessages(props) {
  const { message, sender } = props;
  return (
    <div>
      <div
        className={
          sender === "user" ? "chat-message-user" : "chat-message-robot"
        }
      >
        {sender === "robot" && <img src="robot.png" width="40" />}
        <div className="chat-messages-text"> {message}</div>{" "}
        {sender === "user" && <img src="user.png" width="40" />}
      </div>
    </div>
  );
}
function MessageBots({ messages }) {
    const chatMessagesRef = React.useRef(null);
    React.useEffect(()=>{
      const containerElem=chatMessagesRef.current
  if(containerElem){
    containerElem.scrollTop=containerElem.scrollHeight
  }
    },[messages])
  //

  return (
    <div  ref={chatMessagesRef} className="chat-messages-container">
      {messages.map((message) => {
        return (
          <ChatMessages
            message={message.message}
            sender={message.sender}
            key={message.id}
          />
        );
      })}
    </div>
  );
}
function App() {
  const [messages, setMessages] = React.useState([
    { message: "", sender: "", id: crypto.randomUUID() },
  ]);
  return (
    <div className="app-container">
      <MessageBots messages={messages} />
      <ChatBot messages={messages} setMessages={setMessages} />
    </div>
  );
}
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
