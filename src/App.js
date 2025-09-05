import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate,
} from "react-router-dom";
import LoginSignUpAdmin from "./pages/loginAdmin/loginSignUpAdmin";
import Hierarchy from "./pages/hierarchy";
import DefaultLayout from "./layout/DefaultLayout";
import PrivateRoute from "./components/PrivateRoute";
import AddUser from "./pages/addUser";
import LatestAttendance from "./pages/latestAttendance";
import Dashboard from "./pages/dashboard";
import SuperAdmin from "./pages/dealer";
import Admin from "./pages/mdd";
import Employees from "./pages/employee";
import Payroll from "./pages/payroll";
import AttendanceMatrix from "./pages/attendanceMatrix";
import ActorTypeHierarchy from "./pages/actorTypeHierarchy";
import MetaData from "./pages/metadata";
import Firms from "./pages/firms";
import LeaveApplication from "./pages/LeaveApplication";
function App() {
 return (
   <Router>

    
       <Routes>
         {/* Public Route - Login Page */}
         {/* Login */}
         <Route path="/login" element={<LoginSignUpAdmin />} />
         <Route path="/" element={<Navigate to="/dashboard" replace />} />
    {/* Default route */}
    <Route element={<PrivateRoute element={<DefaultLayout />} />}>
    {/* <Route path="/organization" element={<ActorTypeHierarchy />}/>
    <Route path="/firm" element={<ActorTypeHierarchy />}/> */}
         <Route path="/hierarchy" element={<Hierarchy />} />
         <Route path="/addUser" element={<AddUser />} />
         <Route path="/metadata" element={<MetaData />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/attendance" element = {<LatestAttendance />} />
         <Route path="/attendance-matrix" element={<AttendanceMatrix />} />
         <Route path="/leaveApplication" element={<LeaveApplication />} />
          <Route path="/super-admin" element={<SuperAdmin />} />
            <Route path="/employee" element={<Employees />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/hierarchy" element={<Hierarchy />} />
            <Route path="/actorTypeHierarchy" element={<ActorTypeHierarchy />}/>
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/firm" element={<Firms />} />
         </Route>
         {/* 404 Route for unrecognized paths */}
         {/* <Route path="*" element={<Page404 />} /> */}
       </Routes>
   </Router>
 );
}

export default App;
