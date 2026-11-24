import { useState } from "react";
import {
  ChefHat,
  UserRound,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowLeft,
  Leaf,
  Coffee,
  Utensils,
} from "lucide-react";

import "./login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("من فضلك أدخل بيانات تسجيل الدخول");
      return;
    }

    try {
      setLoading(true);
      await onLogin?.({ username, password });
    } catch (err) {
      setError(err.message || "حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="modern-login" dir="rtl">
      {/* Right Visual Section */}
      <section className="visual-panel">
        <div className="visual-overlay" />

        <header className="visual-header">
          <div className="visual-brand-icon">
            <ChefHat size={30} />
          </div>

          <div>
            <h2>CAV</h2>
            <span>نظام إدارة المطاعم والكافيهات</span>
          </div>
        </header>

        <div className="visual-content">
          <span className="visual-tag">
            <Leaf size={15} />
            إدارة أذكى، تجربة أفضل
          </span>

          <h1>
            كل تفاصيل
            <br />
            مطعمك في <span>مكان واحد.</span>
          </h1>

          <p>
            نظام متكامل لإدارة الطلبات والفواتير والمبيعات والمخزون بكل سهولة
            واحترافية.
          </p>

          <div className="visual-features">
            <div>
              <Utensils size={19} />
              <span>إدارة الطلبات</span>
            </div>

            <div>
              <Coffee size={19} />
              <span>إدارة الكافيه</span>
            </div>
          </div>
        </div>

        <footer className="visual-footer">
          <span>جودة في الخدمة، وتميز في الإدارة.</span>
          <span>EST. 2026</span>
        </footer>
      </section>

      {/* Left Login Section */}
      <section className="form-panel">
        <div className="form-top">
          <div className="mini-brand">
            <ChefHat size={23} />
            <span>RESTAURANT SYSTEM</span>
          </div>
        </div>

        <div className="form-content">
          <div className="welcome-icon">
            <UserRound size={27} />
          </div>

          <div className="welcome-text">
            <span>مرحباً بك مجدداً</span>
            <h1>تسجيل الدخول</h1>
            <p>أدخل بيانات حسابك للوصول إلى لوحة التحكم</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modern-field">
              <label htmlFor="username">اسم المستخدم</label>

              <div className="modern-input">
                <UserRound size={19} />

                <input
                  id="username"
                  type="text"
                  placeholder="أدخل اسم المستخدم"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="modern-field">
              <label htmlFor="password">كلمة المرور</label>

              <div className="modern-input">
                <LockKeyhole size={19} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="modern-eye"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="إظهار أو إخفاء كلمة المرور"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {error && <p className="modern-error">{error}</p>}

            <button type="submit" className="modern-submit" disabled={loading}>
              <span>
                {loading ? "جاري تسجيل الدخول..." : "دخول إلى النظام"}
              </span>

              {!loading && <ArrowLeft size={20} />}
            </button>
          </form>

          <div className="secure-note">
            <LockKeyhole size={15} />
            <span>بياناتك محمية وآمنة</span>
          </div>
        </div>
      </section>
    </main>
  );
}
