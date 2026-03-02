import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";

function ChatPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <ChatWindow id={Number(id)} goBack={() => navigate("/")} />
    </>
  );
}

export default ChatPage;