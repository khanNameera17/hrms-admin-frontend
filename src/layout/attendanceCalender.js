import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./attendanceCalendar.scss"; // custom SCSS

const AttendanceCalendar = () => {
  const [date, setDate] = useState(new Date());

  const attendanceData = {
    "2025-09-01": "present",
    "2025-09-02": "absent",
    "2025-09-03": "leave",
    "2025-09-04": "halfday",
    "2025-09-05": "present",
  };

  // Format date into YYYY-MM-DD to match keys
  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <div className="attendance-calendar">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) => {
          const key = formatDate(date);
          return attendanceData[key] ? `status-${attendanceData[key]}` : "";
        }}
      />
    </div>
  );
};

export default AttendanceCalendar;
