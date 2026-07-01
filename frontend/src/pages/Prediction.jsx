import { useState } from "react";
import axios from "axios";

function Prediction() {
  const [attendance, setAttendance] = useState("");
  const [internal, setInternal] = useState("");
  const [study, setStudy] = useState("");
  const [cgpa, setCgpa] = useState("");

  const predict = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/prediction/",
        {
          attendance: Number(attendance),
          study_hours: Number(study),
          internal_marks: Number(internal),
        }
      );

      setCgpa(res.data.predicted_cgpa);
    } catch (error) {
      alert("Prediction Failed");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Performance Prediction</h1>

      <input
        type="number"
        placeholder="Attendance (%)"
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Internal Marks"
        value={internal}
        onChange={(e) => setInternal(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Study Hours per Day"
        value={study}
        onChange={(e) => setStudy(e.target.value)}
      />

      <br />
      <br />

      <button onClick={predict}>
        Predict CGPA
      </button>

      {cgpa !== "" && (
        <>
          <br />
          <br />
          <h2>Predicted CGPA: {cgpa}</h2>
        </>
      )}
    </div>
  );
}

export default Prediction;