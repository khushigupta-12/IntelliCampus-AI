import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function AnalyticsChart({ stats }) {

  const data = [
    {
      name: "Users",
      value: stats.users || 0,
    },
    {
      name: "Students",
      value: stats.students || 0,
    },
    {
      name: "Faculty",
      value: stats.faculty || 0,
    },
    {
      name: "Appointments",
      value: stats.appointments || 0,
    },
    {
      name: "Chats",
      value: stats.chats || 0,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 400,
        marginTop: 30,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;