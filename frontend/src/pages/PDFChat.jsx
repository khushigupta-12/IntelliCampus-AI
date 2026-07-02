import { useState } from "react";
import api from "../services/api";

function PDFChat() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadPDF = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await api.post(
        "/pdf/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert("Failed to upload PDF");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>📄 PDF AI Assistant</h1>

      <p>
        Upload your syllabus, notes, or any PDF and let AI summarize it.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={uploadPDF} disabled={loading}>
        {loading ? "Uploading..." : "Upload PDF"}
      </button>

      <br />
      <br />

      {loading && <h3>Generating AI Summary...</h3>}

      {summary && (
        <>
          <h2>Summary</h2>

          <textarea
            value={summary}
            readOnly
            rows={18}
            cols={100}
          />
        </>
      )}
    </div>
  );
}

export default PDFChat;