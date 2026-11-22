import { Link } from "react-router-dom";
import "./quickActions.css";

const icons = {
  categories: (
    <>
      <path d="M12 5v14M5 12h14" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </>
  ),
  invoices: (
    <>
      <path d="M6 3h9l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </>
  ),
  suppliers: (
    <>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M7 10h.01M17 10h.01" />
    </>
  ),
};

const QuickActions = ({ actions }) => {
  return (
    <section className="quick-actions-section">
      <div className="home-section-header">
        <div>
          <h3>الوصول السريع</h3>
          <p>اختصارات لأهم العمليات داخل النظام</p>
        </div>
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => (
          <Link to={action.path} className="quick-action-card" key={action.id}>
            <div className="quick-action-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[action.icon]}
              </svg>
            </div>

            <div className="quick-action-info">
              <h4>{action.title}</h4>
              <p>{action.description}</p>
            </div>

            <span className="quick-action-arrow">←</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
