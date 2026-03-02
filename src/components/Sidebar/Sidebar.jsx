import { useState } from "react";
import { useChat } from "../../context/ChatContext";
import ContactItem from "../ContacItem/ContactItem";
import SearchBar from "../SearchBar/SearchBar";
import "./Sidebar.css";

function Sidebar() {
  const { contacts } = useChat();
  const [search, setSearch] = useState("");

  const filtered = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const lastA = a.messages[a.messages.length - 1];
      const lastB = b.messages[b.messages.length - 1];
      return (lastB?.id || 0) - (lastA?.id || 0);
    });

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>WhatsApp</h2>
        <div className="sidebar-icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="contact-list">
        {filtered.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;