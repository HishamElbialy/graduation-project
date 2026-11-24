import { NavLink } from "react-router-dom";
import "./sidebar.css";
import menuItems from "./components/menuItems";
import SidebarIcon from "./components/SidebarIcon";

const Sidebar = () => {
  return (
    <aside className="sidebar" dir="rtl">
      <div className="sidebar-brand">
        <div className="brand-logo">
          <span>C</span>
        </div>

        <div className="brand-info">
          <h2>CAV</h2>
          <span>Management System</span>
        </div>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">
        <span className="sidebar-section-title">القائمة الرئيسية</span>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <SidebarIcon name={item.icon} />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <button type="button" className="sidebar-logout">
          <SidebarIcon name="logout" />
          <span>تسجيل الخروج</span>
        </button>

        <div className="sidebar-version">
          <span className="version-dot"></span>
          Restaurant System
          <span>v1.0</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
