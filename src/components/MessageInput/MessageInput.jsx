import { useState, useRef } from "react";
import { useChat } from "../../context/ChatContext";
import "./MessageInput.css";

function MessageInput({ contactId }) {
    const { sendMessage, autoReply } = useChat();
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleSend = () => {
        if (!text.trim()) return;
        sendMessage(contactId, text);
        autoReply(contactId);
        setText("");
        inputRef.current.style.height = "auto";
    };

    const handleChange = (e) => {
        const el = e.target;
        setText(el.value);
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
        el.scrollTop = el.scrollHeight;
    };

    return (
        <div className="message-input">
            <div className="input-bubble">

                <textarea
                    ref={inputRef}
                    rows="1"
                    placeholder="Escribí un mensaje"
                    value={text}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />

                {text.trim() ? (
                    <i
                        className="bi bi-arrow-right-circle-fill send-icon active"
                        onClick={handleSend}
                    ></i>
                ) : (
                    <i className="bi bi-mic-fill mic-icon"></i>
                )}

            </div>
        </div>
    );
}

export default MessageInput;