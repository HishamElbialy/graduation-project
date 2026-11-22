import "./statsCards.css";

const icons = {
  categories: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  suppliers: (
    <>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M7 10h.01M17 10h.01" />
    </>
  ),
  invoices: (
    <>
      <path d="M6 3h9l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v6h6M8 13h8M8 17h8" />
    </>
  ),
  tables: (
    <>
      <path d="M3 8h18v3H3zM5 11v10M19 11v10" />
      <path d="M12 11v10" />
    </>
  ),
};

const StatsCards = ({ stats }) => {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.id}>
          <div className="stat-card-top">
            <div className={`stat-icon stat-icon-${stat.icon}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[stat.icon]}
              </svg>
            </div>
          </div>

          <div className="stat-info">
            <span className="stat-title">{stat.title}</span>
            <h3>{stat.value}</h3>
            <span className="stat-description">{stat.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
