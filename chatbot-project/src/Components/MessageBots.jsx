import { useEffect,useRef } from "react";
import { ChatMessages } from "./ChatMessage";
import './MessageBots.css'
export function MessageBots({ messages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [messages]);
  //

  return (
    <div ref={chatMessagesRef} className="chat-messages-container">
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

export default MessageBots;