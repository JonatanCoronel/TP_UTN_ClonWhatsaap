import { Link } from "react-router-dom";
import "./ContactItem.css";

function ContactItem({ contact }) {
  const lastMessage =
    contact.messages[contact.messages.length - 1];

  return (
    <Link to={`/chat/${contact.id}`} className="contact-item">
      <img src={contact.avatar} alt={contact.name} />

      <div className="contact-info">
        <div className="contact-name">{contact.name}</div>
        <div className="contact-last">
          {lastMessage?.text}
        </div>
      </div>

      <div className="contact-meta">
        <div>{lastMessage?.time}</div>

        {contact.unread > 0 && (
          <span className="unread-badge">
            {contact.unread}
          </span>
        )}
      </div>
    </Link>
  );
}

export default ContactItem;