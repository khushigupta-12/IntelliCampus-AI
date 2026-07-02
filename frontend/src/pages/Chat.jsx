import { useState } from "react";
import api from "../services/api";

function Chat() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await api.post("/chat/", {
        message,
      });

      setAnswer(res.data.answer);
      setFaculty(res.data.faculty);
    } catch (err) {
      console.error(err);
      alert("AI Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h1>IntelliCampus AI Assistant</h1>

      <textarea
        rows={5}
        style={{ width: "100%" }}
        placeholder="Ask anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button onClick={askAI} disabled={loading}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <br />
      <br />

      {faculty && (
        <div
          style={{
            border: "1px solid gray",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <h2>Recommended Faculty</h2>

          <p><b>Name:</b> {faculty.name}</p>
          <p><b>Department:</b> {faculty.department}</p>
          <p><b>Subjects:</b> {faculty.subjects.join(", ")}</p>
        </div>
      )}

      <br />

      {answer && (
        <div
          style={{
            border: "1px solid green",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h2>AI Response</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;