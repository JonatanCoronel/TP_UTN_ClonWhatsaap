import { useEffect, useState } from "react";
import { useChat } from "../../context/ChatContext";
import "./ChatWindow.css";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";

function ChatWindow({ id, goBack }) {
  const { contacts, resetUnread } = useChat();
  const [typing, setTyping] = useState(false);

  const contact = contacts.find(c => c.id === id);

  useEffect(() => {
    if (contact) resetUnread(id);
  }, [id]);

  useEffect(() => {
    if (!contact) return;

    const lastMessage =
      contact.messages[contact.messages.length - 1];

    if (lastMessage?.sender === "me") {
      setTyping(true);
      const timer = setTimeout(() => {
        setTyping(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [contact?.messages]);

  if (!contact) return null;

  return (
    <div className="chat-window">
      <div className="chat-header">
        <button className="back-btn" onClick={goBack}>
          <i className="bi bi-chevron-left"></i>
        </button>

        <img src={contact.avatar} alt={contact.name} />
        <span className="chat-title">{contact.name}</span>

        <div className="chat-icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      <div className="messages">
        {contact.messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}

        {typing && (
          <div className="message received typing">
            <i>Escribiendo...</i>
          </div>
        )}
      </div>

      <MessageInput contactId={id} />
    </div>
  );
}

export default ChatWindow;