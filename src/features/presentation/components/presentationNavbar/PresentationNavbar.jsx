import { Link } from "react-router-dom";
import "./presentationNavbar.css";

const navLinks = [
  { label: "عن النظام", href: "#about" },
  { label: "خريطة النظام", href: "#system-map" },
  { label: "المميزات", href: "#modules" },
  { label: "التقنيات", href: "#technology" },
];

const PresentationNavbar = () => {
  return (
    <header className="presentation-navbar">
      <div className="presentation-navbar-container">
        <a href="#" className="presentation-brand">
          <span className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 8h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 4c0 1 1 1 1 2M12 3c0 1 1 1 1 2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span>
            CAFE<span className="brand-highlight"> SYSTEM</span>
          </span>
        </a>

        <nav className="presentation-nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <Link to="/login" className="presentation-login-btn">
          تسجيل الدخول
          <span>←</span>
        </Link>
      </div>
    </header>
  );
};

export default PresentationNavbar;
