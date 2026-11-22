import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/layout/sidebar/Sidebar";
import Navbar from "../../../components/layout/navbar/Navbar";
import "./dashboardLayout.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-right">
          <Sidebar />
        </div>
        <div className="dashboard-left">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
