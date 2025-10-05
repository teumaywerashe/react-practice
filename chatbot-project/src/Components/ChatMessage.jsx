import robotprofileimage from "../assets/robot.png";
import userprofileimage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessages(props) {
  const { message, sender } = props;
  return (
    <div>
      <div
        className={
          sender === "user" ? "chat-message-user" : "chat-message-robot"
        }
      >
        {sender === "robot" && <img src={robotprofileimage} width="40" />}
        <div className="chat-messages-text"> {message}</div>{" "}
        {sender === "user" && <img src={userprofileimage} width="40" />}
      </div>
    </div>
  );
}
