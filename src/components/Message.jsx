function Message({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`message ${isMe ? "me" : "them"}`}>
      <div>
        <span>{message.text}</span>

        <div className="message-meta">
          <span className="message-time">{message.time}</span>

          {isMe && (
            <span className="message-status">
              {message.read ? (
                <i className="bi bi-check2-all"></i>
              ) : (
                <i className="bi bi-check-lg"></i>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;