import "./reports.css";

const Reports = () => {
  return (
    <div className="reports-page" dir="rtl">
      <div className="reports-content">
        <div className="reports-illustration">
          <div className="illustration-card card-one">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="illustration-card card-two">
            <div className="chart-line">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="illustration-main">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 3.5h7l5 5V20a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" />
              <path d="M14 3.5V9h5" />
              <path d="M8.5 15.5l2.5-2.5 2 2 3.5-4" />
              <path d="M8.5 18h7" />
            </svg>
          </div>

          <div className="illustration-dot dot-one"></div>
          <div className="illustration-dot dot-two"></div>
        </div>

        <div className="reports-text">
          <span className="reports-eyebrow">WORK IN PROGRESS</span>

          <h1>
            التقارير
            <span> قريباً</span>
          </h1>

          <p>
            نجهّز لك مساحة متكاملة لمتابعة أداء النظام،
            <br className="desktop-break" />
            واستعراض التقارير والإحصائيات بطريقة واضحة ومنظمة.
          </p>

          <div className="reports-divider"></div>

          <div className="reports-footer">
            <span className="reports-indicator"></span>
            <span>نعمل على تجهيز هذا القسم حالياً</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
