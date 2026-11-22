import { Link } from "react-router-dom";
import "./presentationFooter.css";

const footerLinks = [
  { title: "عن النظام", path: "#about" },
  { title: "خريطة النظام", path: "#system-map" },
  { title: "وحدات النظام", path: "#modules" },
  { title: "دورة العمل", path: "#workflow" },
  { title: "الصلاحيات", path: "#permissions" },
  { title: "التقنيات", path: "#technology" },
];

const PresentationFooter = () => {
  return (
    <footer className="presentation-footer">
      <div className="presentation-footer-container">
        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="section-eyebrow">READY TO EXPLORE?</span>

            <h2>
              إدارة أسهل،
              <span> ورؤية أوضح.</span>
            </h2>

            <p>
              اكتشف واجهة النظام وتعرّف على تجربة إدارة الكافيه من خلال تسجيل
              الدخول.
            </p>

            <Link to="/login" className="footer-login-button">
              الدخول إلى النظام
              <span>←</span>
            </Link>
          </div>

          <div className="footer-cta-decoration">
            <span className="footer-decoration-circle circle-one" />
            <span className="footer-decoration-circle circle-two" />
            <span className="footer-decoration-text">CAFE</span>
            <span className="footer-decoration-caption">MANAGEMENT SYSTEM</span>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-brand-mark">C</div>

            <div>
              <strong>CAFE SYSTEM</strong>
              <span>MANAGEMENT PLATFORM</span>
            </div>

            <p>
              نظام متكامل لتنظيم وإدارة العمليات الأساسية داخل الكافيه، من خلال
              واجهة واضحة وبنية تقنية قابلة للتطوير.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>استكشف النظام</h3>

            <div className="footer-links">
              {footerLinks.map((link) => (
                <a key={link.path} href={link.path}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-access">
            <h3>الوصول السريع</h3>

            <p>
              يمكنك الانتقال مباشرة إلى شاشة تسجيل الدخول لاستكشاف واجهة النظام.
            </p>

            <Link to="/login" className="footer-access-link">
              تسجيل الدخول
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CAFE MANAGEMENT SYSTEM</span>

          <span>Graduation Project</span>

          <a href="#top">العودة إلى الأعلى ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default PresentationFooter;
