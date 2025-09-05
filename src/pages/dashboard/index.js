import { VscGraphLine } from "react-icons/vsc";
import { FaFileAlt } from "react-icons/fa";
import { IoPricetagSharp } from "react-icons/io5";
import { TiUserAdd } from "react-icons/ti";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card, CardContent, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
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

 const toKey = (d) => {
   const y = d.getFullYear();
   const m = String(d.getMonth() + 1).padStart(2, "0");
   const day = String(d.getDate()).padStart(2, "0");
   return `${y}-${m}-${day}`;
 };

 const getStatusForDate = (date) => attendanceData[toKey(date)];
  return (
    <div className="dashboard">
      {/* <div className="dashboard-header">Hello Admin</div> */}

      {/* Dummy Stats Row */}
      {/* <div className="first-line">
        {dummyStats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          </div>
        ))}
      </div> */}
    <div className="attendance-section">
  <div className="attendance-header">
    <h2>Hello, Admin</h2>
    <span className="time">Time : 20:20</span>
  </div>

  <div className="attendance-cards">
    {/* Today’s Attendance */}
    <Card className="attendance-card">
  <CardContent>
    <Typography variant="h6">Today’s Attendance</Typography>
    <PieChart
      width={300}
      height={300}
      series={[
        {
          data: [
            { id: 0, value: 32, label: "Present", color: "#4CAF50" },
            { id: 1, value: 23, label: "Absent", color: "#F44336" },
            { id: 2, value: 43, label: "Leave", color: "#FFC107" },
            { id: 3, value: 21, label: "Half Day", color: "#800080" },
          ],
          innerRadius: 50,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 3,
        },
      ]}
    />
  </CardContent>
</Card>
    {/* My Attendance */}
    <div className="attendance-card">
  <div className="attendance-title">My Attendance</div>

  {/* ✅ Add Legend here */}
  <div className="attendance-legend">
    <div className="legend-item present"><span className="color-box"></span> Present</div>
    <div className="legend-item absent"><span className="color-box"></span> Absent</div>
    <div className="legend-item leave"><span className="color-box"></span> Leave</div>
    <div className="legend-item halfday"><span className="color-box"></span> Halfday</div>
  </div>

  <div className="attendance-calendar">
    <Calendar
      tileContent={({ date }) => {
        const status = getStatusForDate(date);
        return status ? <span className={`status-dot ${status}`} /> : null;
      }}
    />
  </div>
</div>
<div className="total-revenue-graph">
          <div className="total-revenue-header">Total Payroll</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={extractionData} barSize={40}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="generate" stackId="a" fill="#00C49F" />
              <Bar dataKey="Paid" stackId="a" fill="#0088FE" />
              <Bar dataKey="Unpaid" stackId="a" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  </div>
</div>
      {/* Extraction Insights */}
      {/* <div className="extraction-insights-graph">
        <div className="extraction-header">Extraction Insights</div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={extractionData}>
            <XAxis tick={{ fontSize: 10 }} dataKey="month" />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="iPhone"
              stroke="#FF5733"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Samsung"
              stroke="#33FF57"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="OnePlus"
              stroke="#3380FF"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
      <div className="second-line">
        {/* <div className="total-revenue-graph">
          <div className="total-revenue-header">Total Revenue</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={extractionData} barSize={40}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="iPhone" stackId="a" fill="#00C49F" />
              <Bar dataKey="Samsung" stackId="a" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}
        {/* <div className="customer-satisfaction-graph">
          <div className="customer-satisfaction-header">
            Customer Satisfaction
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={extractionData}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#438ef7" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#438ef7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34c38f" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#34c38f" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis hide dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="iPhone"
                stroke="#438ef7"
                fillOpacity={1}
                fill="url(#colorLastMonth)"
              />
              <Area
                type="monotone"
                dataKey="Samsung"
                stroke="#34c38f"
                fillOpacity={1}
                fill="url(#colorThisMonth)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="data-table-content">
            <div>{lastEntry["iPhone"]}</div>
            <div>{lastEntry.Samsung}</div>
          </div>
        </div> */}
        {/* <div className="target-reality-graph"> */}
          {/* <div className="target-reality-header">Target Vs Reality</div> */}
          {/* <ResponsiveContainer width="100%" height={200}> */}
            {/* <BarChart data={extractionData}>
              <XAxis dataKey="month" interval={1} />
              <YAxis hide />
              <Tooltip /> */}

              {/* Bars for different brands */}
              {/* <Bar
                dataKey="iPhone"
                fill="#4AB58E"
                barSize={30}
                radius={[5, 5, 0, 0]}
                fillOpacity={0.8}
              />
              <Bar
                dataKey="Samsung"
                fill="#FFCF00"
                barSize={30}
                radius={[5, 5, 0, 0]}
                fillOpacity={0.8}
              /> */}
            {/* </BarChart> */}
            {/* <div className="custom-legend">
              <div className="custom-legend-content green">
                <div>
                  <MdPhoneIphone />
                  iPhone
                </div>
                <span>{lastEntry.iPhone}</span>
              </div>
              <div className="custom-legend-content yellow">
                <div>
                  <MdPhoneIphone />
                  Samsung
                </div>
                <span>{lastEntry.Samsung}</span>
              </div>
            </div> */}
          {/* </ResponsiveContainer> */}
        {/* </div> */}
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
              <Bar dataKey="iPhone" stackId="a" fill="#00C49F" />
              <Bar dataKey="Samsung" stackId="a" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
