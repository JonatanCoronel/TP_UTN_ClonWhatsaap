import { createContext, useContext, useState } from "react";
import { contacts as initialContacts } from "../data/contacts";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [contacts, setContacts] = useState(initialContacts);

  const sendMessage = (contactId, text) => {
    setContacts(prev =>
      prev.map(contact => {
        if (contact.id === contactId) {
          const newMessage = {
            id: Date.now(),
            text,
            sender: "me",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })
          };

          return {
            ...contact,
            messages: [...contact.messages, newMessage]
          };
        }
        return contact;
      })
    );
  };

  const autoReply = (contactId) => {
    setTimeout(() => {
      setContacts(prev =>
        prev.map(contact => {
          if (contact.id === contactId) {
            const randomReply =
              contact.replies[
                Math.floor(Math.random() * contact.replies.length)
              ];

            const newMessage = {
              id: Date.now(),
              text: randomReply,
              sender: "them",
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
              })
            };

            return {
              ...contact,
              messages: [...contact.messages, newMessage],
              unread: contact.unread + 1
            };
          }
          return contact;
        })
      );
    }, 1500);
  };

  const resetUnread = (contactId) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === contactId
          ? { ...contact, unread: 0 }
          : contact
      )
    );
  };

  return (
    <ChatContext.Provider
      value={{ contacts, sendMessage, autoReply, resetUnread }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);