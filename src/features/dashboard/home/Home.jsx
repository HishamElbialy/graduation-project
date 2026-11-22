import StatsCards from "./components/StatsCards/StatsCards";
import QuickActions from "./components/QuickActions/QuickActions";
import RecentInvoices from "./components/RecentInvoices/RecentInvoices";

import { statsData, quickActions, recentInvoices } from "./homeData";

import "./home.css";

const Home = () => {
  return (
    <div className="home-page" dir="rtl">
      <div className="home-welcome">
        <div>
          <span className="home-welcome-label">لوحة التحكم</span>
          <h2>أهلاً بيك</h2>
          <p>
            إليك نظرة عامة على نظام إدارة المطعم. يمكنك متابعة أهم البيانات
            والوصول السريع للعمليات.
          </p>
        </div>
      </div>

      <section className="home-stats-section">
        <div className="home-main-heading">
          <h3>نظرة عامة</h3>
          <span>ملخص بيانات النظام</span>
        </div>

        <StatsCards stats={statsData} />
      </section>

      <QuickActions actions={quickActions} />

      <RecentInvoices invoices={recentInvoices} />
    </div>
  );
};

export default Home;
