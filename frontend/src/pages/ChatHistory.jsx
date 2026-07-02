import { useEffect, useState } from "react";
import api from "../services/api";

function ChatHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await api.get("/chat/history");
      setHistory(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load chat history.");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>AI Chat History</h1>

      {history.map((chat) => (
        <div
          key={chat.id}
          style={{
            border: "1px solid #ddd",
            padding: 20,
            marginBottom: 20,
            borderRadius: 10,
          }}
        >
          <h3>Question</h3>
          <p>{chat.question}</p>

          <h3>Answer</h3>
          <p>{chat.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory;