import { useEffect, useState } from "react";
import axios from "axios";

function FacultyDashboard() {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {

    const res = await axios.get(
      "http://127.0.0.1:8000/appointments/"
    );

    setAppointments(res.data);

  };

  return (

    <div style={{padding:40}}>

      <h1>Faculty Dashboard</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width:"100%",
          borderCollapse:"collapse"
        }}
      >

        <thead>

          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Faculty</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
          </tr>

        </thead>

        <tbody>

          {appointments.map((item)=>(

            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.student_id}</td>
              <td>{item.faculty_id}</td>
              <td>{item.appointment_date}</td>
              <td>{item.appointment_time}</td>
              <td>{item.reason}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default FacultyDashboard;