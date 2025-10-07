import {
 ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
 BarChart,
 Bar,

 PieChart,
 Pie,
 Cell
} from "recharts";

import { Card, CardContent, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdPhoneIphone } from "react-icons/md";

import "./style.scss";
function Dashboard() {
  const extractionData = [
    { month: "Jan", generate: 320, Paid: 290, Unpaid: 340 },
    { month: "Feb", generate: 300, Paid: 260, Unpaid: 330 },
    { month: "Mar", generate: 280, Paid: 230, Unpaid: 310 },
    { month: "Apr", generate: 260, Paid: 220, Unpaid: 290 },
    { month: "May", generate: 250, Paid: 300, Unpaid: 270 },
    { month: "Jun", generate: 290, Paid: 350, Unpaid: 310 },
    { month: "Jul", generate: 320, Paid: 400, Unpaid: 350 },
    { month: "Aug", generate: 330, Paid: 370, Unpaid: 360 },
    { month: "Sep", generate: 310, Paid: 340, Unpaid: 330 },
    { month: "Oct", generate: 290, Paid: 310, Unpaid: 300 },
    { month: "Nov", generate: 270, Paid: 280, Unpaid: 290 },
    { month: "Dec", generate: 250, Paid: 260, Unpaid: 270 },
  ];
  

  const lastEntry = extractionData.at(-1);

  const color = ["4CAF50", "orange", "green", "purple"];
  const products = [
    { id: "01", name: "Himanshu Sharma", popularity: 45 },
    { id: "02", name: "Rahul Sharma", popularity: 29 },
    { id: "03", name: "Anil Saini", popularity: 18 },
    { id: "04", name: "Sunil Saini", popularity: 25 },
  ];

  // ✅ Attendance dummy data
  const attendanceData = {
   "2025-09-01": "present",
   "2025-09-02": "absent",
   "2025-09-03": "leave",
   "2025-09-04": "halfday",
   "2025-09-05": "present",
 };
  // ✅ Dummy donut chart data
  const dummyDonutData = [
   { name: "present", value: 65, color: "#4CAF50" },
   { name: "absent", value: 25, color: "#f44336" },
   { name: "leave", value: 10, color: "#ff9800" },
   { name: "halfday", value: 10, color: "#673ab7" },
 ];

 const toKey = (d) => {
   const y = d.getFullYear();
   const m = String(d.getMonth() + 1).padStart(2, "0");
   const day = String(d.getDate()).padStart(2, "0");
   return `${y}-${m}-${day}`;
 };

 const getStatusForDate = (date) => attendanceData[toKey(date)];
  return (
    <div className="dashboard">
       <div className="attendance-header">
      <h2>Hello Admin</h2>
      <div className="time">
  Today: {new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}
</div>

    </div>
   {/* === Payroll Section === */}
   <div className="total-revenue-graph">
  <div className="header-with-button">
    <div className="total-revenue-header">Total Payroll</div>
    <button
      className="see-payroll-btn"
      onClick={() => (window.location.href = "/payroll")}
    >
      See Payroll
    </button>
  </div>

  <ResponsiveContainer width="100%" height={240}>
  <LineChart data={extractionData}>
    <XAxis dataKey="month" stroke="#666" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="Unpaid"
      stroke="#FFC107"
      strokeWidth={3}
      dot={{ r: 4 }}
    />
    <Line
      type="monotone"
      dataKey="Paid"
      stroke="#2196F3"
      strokeWidth={3}
      dot={{ r: 4 }}
    />
    <Line
      type="monotone"
      dataKey="generate"
      stroke="#4CAF50"
      strokeWidth={3}
      dot={{ r: 4 }}
    />
  </LineChart>
</ResponsiveContainer>

</div>
  <div className="attendance-cards">
    {/* === Today's Attendance (Donut) === */}
    <div className="attendance-card todays-attendance-card">
      <div className="attendance-header-with-button">
        <div className="attendance-title">Today’s Attendance</div>
        <button
          className="see-attendance-btn"
          onClick={() => (window.location.href = "/attendance")}
        >
          See All
        </button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={dummyDonutData}
            dataKey="value"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            cornerRadius={6}
          >
            {dummyDonutData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="attendance-legend">
        <div className="legend-item present"><span className="color-box"></span> Present</div>
        <div className="legend-item absent"><span className="color-box"></span> Absent</div>
        <div className="legend-item leave"><span className="color-box"></span> Leave</div>
        <div className="legend-item halfday"><span className="color-box"></span> Halfday</div>
      </div>
    </div>

    {/* === My Attendance Calendar === */}
    <div className="attendance-card my-attendance-card">
      <div className="attendance-title">My Attendance</div>
      <div className="attendance-calendar">
        <div className="attendance-legend">
          <div className="legend-item present"><span className="color-box"></span> Present</div>
          <div className="legend-item absent"><span className="color-box"></span> Absent</div>
          <div className="legend-item leave"><span className="color-box"></span> Leave</div>
          <div className="legend-item halfday"><span className="color-box"></span> Halfday</div>
        </div>
        <Calendar
          tileContent={({ date }) => {
            const status = getStatusForDate(date);
            return status ? <span className={`status-dot ${status}`} /> : null;
          }}
        />
      </div>
    </div>
  </div>



      <div className="third-line">
        <div className="top-products">
          <div className="top-products-header">Top Products</div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{product.name}</td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className={`progress ${color[index % color.length]} `}
                        style={{
                          width: `${product.popularity}%`,
                        }}
                      ></div>
                      <div className="progress-bg"></div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`sales-badge ${color[index % color.length]}`}
                      style={{ color: product.color }}
                    >
                      {product.popularity}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="volume-service">
          <div className="volume-service-header">Volume vs Service Level</div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={extractionData} barSize={40}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Paid" stackId="a" fill="#00C49F" />
              <Bar dataKey="Unpaid" stackId="a" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
