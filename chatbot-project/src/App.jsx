import { useState } from "react";
import { ChatInput } from "./Components/ChatInput";

import MessageBots from "./Components/MessageBots";

import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { message: "Hello", sender: "user", id: "id1" },
    { message: "Hello what can i help you", sender: "robot", id: "id2" },
  ]);
  return (
    <div className="app-container">
      <MessageBots messages={messages} />
      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
