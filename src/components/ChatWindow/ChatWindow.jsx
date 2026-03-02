import { useEffect, useState, useRef } from "react";
import { useChat } from "../../context/ChatContext";
import "./ChatWindow.css";
import Message from "../Message/Message";
import MessageInput from "../MessageInput/MessageInput";

function ChatWindow({ id, goBack }) {
  const { contacts, resetUnread } = useChat();
  const messagesEndRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const contact = contacts.find(c => c.id === id);

  useEffect(() => {
    resetUnread(id);
  }, [id]);

  useEffect(() => {
    if (!contact) return;

    const lastMessage =
      contact.messages[contact.messages.length - 1];

    if (!lastMessage || lastMessage.sender !== "me") return;

    setTyping(true);

    const timer = setTimeout(() => {
      setTyping(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [contact?.messages.length]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    if (showSearch) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showSearch]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [contact?.messages.length]);

  const closeSearch = () => {
    setShowSearch(false);
    setSearchText("");
  };

  if (!contact) return null;

  const filteredMessages = contact.messages.filter(msg =>
    msg.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="chat-window">
      <div className="chat-header">
        <button className="back-btn" onClick={goBack}>
          <i className="bi bi-chevron-left"></i>
        </button>

        <img src={contact.avatar} alt={contact.name} />
        <span className="chat-title">{contact.name}</span>

        <div className="chat-icons">
          <i
            className="bi bi-search"
            onClick={() => setShowSearch(true)}
          ></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      {showSearch && (
        <div className="chat-search">
          <input
            type="text"
            placeholder="Buscar en el chat..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />
          <span className="cancel-search" onClick={closeSearch}>
            Cancelar
          </span>
        </div>
      )}

      <div className="messages">
        {(showSearch ? filteredMessages : contact.messages).map(msg => (
          <Message key={msg.id} message={msg} />
        ))}

        {typing && !showSearch && (
          <div className="message received typing">
            <i>Escribiendo...</i>
          </div>
        )}

        {/* 🔥 ancla invisible */}
        <div ref={messagesEndRef} />
      </div>

      <MessageInput contactId={id} />
    </div>
  );
}

export default ChatWindow;