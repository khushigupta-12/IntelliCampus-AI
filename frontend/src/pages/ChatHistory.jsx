import { useEffect, useState } from "react";
import axios from "axios";

function ChatHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {

    const res = await axios.get(
      "http://127.0.0.1:8000/chat/history"
    );

    setHistory(res.data);

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
            borderRadius: 10
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