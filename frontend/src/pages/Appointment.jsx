import { useState } from "react";
import axios from "axios";

function Appointment() {
  const [form, setForm] = useState({
    student_id: 1,
    faculty_id: 1,
    appointment_date: "",
    appointment_time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const bookAppointment = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/appointments/book",
        form
      );

      alert(res.data.message);

      setForm({
        student_id: 1,
        faculty_id: 1,
        appointment_date: "",
        appointment_time: "",
        reason: "",
      });
    } catch (err) {
      console.error(err);
      alert("Booking Failed");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Book Appointment</h1>

      <form onSubmit={bookAppointment}>

        <input
          type="number"
          name="student_id"
          placeholder="Student ID"
          value={form.student_id}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="faculty_id"
          placeholder="Faculty ID"
          value={form.faculty_id}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="appointment_date"
          value={form.appointment_date}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="time"
          name="appointment_time"
          value={form.appointment_time}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="reason"
          placeholder="Reason"
          value={form.reason}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Book Appointment
        </button>

      </form>
    </div>
  );
}

export default Appointment;