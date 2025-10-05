import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

export function ChatInput({ messages, setMessages }) {
  const [text, setText] = useState("");
  function saveChange(event) {
    setText(event.target.value);
  }

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