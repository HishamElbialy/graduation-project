import { Link } from "react-router-dom";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <section className="presentation-hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            <span className="hero-label-dot"></span>
            CAFE MANAGEMENT SYSTEM
          </span>

          <h1>
            كل تفاصيل النظام
            <br />
            <span>في مكان واحد.</span>
          </h1>

          <p className="hero-description">
            نظام متكامل لإدارة وتنظيم عمليات الكافيه، من إدارة الأصناف والموردين
            والمشتريات، إلى المستخدمين والطاولات، من خلال واجهة واحدة سهلة
            ومنظمة.
          </p>

          <div className="hero-actions">
            <a href="#system-map" className="hero-primary-btn">
              استكشف النظام
              <span>←</span>
            </a>

            <Link to="/login" className="hero-secondary-btn">
              تسجيل الدخول
            </Link>
          </div>

          <div className="hero-caption">
            <span></span>
            منصة موحدة لإدارة عمليات الكافيه
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-decoration"></div>

          <div className="hero-dashboard">
            <div className="mockup-sidebar">
              <div className="mockup-logo"></div>

              <div className="mockup-menu active"></div>
              <div className="mockup-menu"></div>
              <div className="mockup-menu"></div>
              <div className="mockup-menu"></div>
              <div className="mockup-menu"></div>
            </div>

            <div className="mockup-main">
              <div className="mockup-topbar">
                <div className="mockup-heading"></div>
                <div className="mockup-avatar"></div>
              </div>

              <div className="mockup-welcome">
                <div>
                  <span></span>
                  <strong></strong>
                </div>
                <div className="mockup-welcome-shape"></div>
              </div>

              <div className="mockup-stats">
                <div className="mockup-stat">
                  <span></span>
                  <strong></strong>
                  <small></small>
                </div>
                <div className="mockup-stat">
                  <span></span>
                  <strong></strong>
                  <small></small>
                </div>
                <div className="mockup-stat">
                  <span></span>
                  <strong></strong>
                  <small></small>
                </div>
              </div>

              <div className="mockup-bottom">
                <div className="mockup-chart">
                  <div className="mockup-chart-heading"></div>
                  <div className="mockup-chart-bars">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="mockup-summary">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">✓</span>
            <div>
              <strong>إدارة منظمة</strong>
              <small>كل شيء في مكان واحد</small>
            </div>
          </div>

          <div className="hero-visual-caption">SYSTEM INTERFACE PREVIEW</div>
        </div>
      </div>

      <div className="hero-bottom-line"></div>
    </section>
  );
};

export default HeroSection;
