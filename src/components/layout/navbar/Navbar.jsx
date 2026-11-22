import { useLocation } from "react-router-dom";
import "./navbar.css";

const pageTitles = {
  "/dashboard": "لوحة التحكم",
  "/dashboard/categories": "إدارة الأصناف",
  "/dashboard/products": "المنتجات",
  "/dashboard/orders": "الطلبات",
  "/dashboard/inventory": "المخزون",
  "/dashboard/users": "المستخدمين",
  "/dashboard/reports": "التقارير",
  "/dashboard/settings": "الإعدادات",
};

const Navbar = () => {
  const location = useLocation();

  const currentPage = pageTitles[location.pathname] || "لوحة التحكم";

  return (
    <header className="navbar" dir="rtl">
      {/* Page Info */}
      <div className="navbar-page-info">
        <span className="navbar-page-label">الرئيسية</span>

        <span className="navbar-divider">/</span>

        <h1>{currentPage}</h1>
      </div>

      {/* User Actions */}
      <div className="navbar-actions">
        {/* Notifications */}
        <button
          type="button"
          className="navbar-icon-btn"
          aria-label="الإشعارات"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

          <span className="notification-dot"></span>
        </button>

        <div className="navbar-user">
          <div className="navbar-user-info">
            <span className="navbar-user-name">مدير النظام</span>
            <span className="navbar-user-role">Administrator</span>
          </div>

          <div className="navbar-avatar">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
