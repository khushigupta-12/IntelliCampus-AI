import { useState } from "react";
import api from "../services/api";

function Prediction() {

  const [attendance, setAttendance] = useState("");
  const [internal, setInternal] = useState("");
  const [study, setStudy] = useState("");
  const [result, setResult] = useState("");

  const predict = async () => {
const res = await api.post("/prediction/", {
  attendance: Number(attendance),
  study_hours: Number(study),
  internal_marks: Number(internal),
});

    setResult(
      `${res.data.prediction} (Score : ${res.data.score})`
    );

  };

  return (
    <div style={{padding:40}}>
      <h1>Performance Prediction</h1>

      <input
        placeholder="Attendance %"
        value={attendance}
        onChange={(e)=>setAttendance(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Internal Marks"
        value={internal}
        onChange={(e)=>setInternal(e.target.value)}
      />

      <br/><br/>

      <input
        placeholder="Study Hours"
        value={study}
        onChange={(e)=>setStudy(e.target.value)}
      />

      <br/><br/>

      <button onClick={predict}>
        Predict
      </button>

      <h2>{result}</h2>

    </div>
  );

}

export default Prediction;