import { useState } from "react";
import { systemMapData } from "./systemMapData";
import "./systemMap.css";

const SystemMap = () => {
  const [selectedModule, setSelectedModule] = useState("home");

  const activeModule = systemMapData.find(
    (module) => module.id === selectedModule
  );

  return (
    <section className="system-map-section" id="system-map">
      <div className="system-map-container">
        <div className="system-map-heading">
          <span className="section-eyebrow">SYSTEM ARCHITECTURE</span>

          <h2>
            خريطة النظام
            <span> من البداية للنهاية.</span>
          </h2>

          <p>
            استكشف مكونات النظام والعلاقة بين شاشاته المختلفة، واختر أي قسم
            لمعرفة دوره والوظائف التي يقدمها.
          </p>
        </div>

        <div className="system-architecture">
          <div className="architecture-node login-node">
            <span className="architecture-node-icon">01</span>
            <div>
              <strong>تسجيل الدخول</strong>
              <small>Login & Authentication</small>
            </div>
          </div>

          <div className="architecture-connector">
            <span></span>
          </div>

          <div className="architecture-node dashboard-node">
            <span className="architecture-node-icon">02</span>
            <div>
              <strong>لوحة التحكم الرئيسية</strong>
              <small>Dashboard</small>
            </div>
          </div>

          <div className="architecture-connector">
            <span></span>
          </div>

          <div className="architecture-modules">
            <div className="architecture-modules-heading">
              <span></span>
              <strong>أقسام النظام الرئيسية</strong>
              <span></span>
            </div>

            <div className="architecture-modules-grid">
              {systemMapData.map((module) => (
                <button
                  type="button"
                  key={module.id}
                  className={`architecture-module ${
                    selectedModule === module.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedModule(module.id)}
                  aria-pressed={selectedModule === module.id}
                >
                  <span className="module-number">{module.number}</span>

                  <span className="module-info">
                    <strong>{module.title}</strong>
                    <small>{module.subtitle}</small>
                  </span>

                  <span className="module-arrow">↗</span>
                </button>
              ))}
            </div>
          </div>

          <div className="architecture-connector">
            <span></span>
          </div>

          <div className="architecture-backend">
            <div className="backend-layer">
              <span className="backend-symbol">API</span>
              <div>
                <strong>Backend</strong>
                <small>ASP.NET Core Web API</small>
              </div>
            </div>

            <span className="backend-connection">↔</span>

            <div className="backend-layer">
              <span className="backend-symbol database-symbol">DB</span>
              <div>
                <strong>Database</strong>
                <small>SQL Server</small>
              </div>
            </div>
          </div>
        </div>

        <div className="systemMap-module-details" aria-live="polite">
          <div className="module-details-header">
            <div>
              <span className="section-eyebrow">
                MODULE {activeModule.number}
              </span>
              <h3>{activeModule.title}</h3>
              <span className="module-details-subtitle">
                {activeModule.subtitle}
              </span>
            </div>

            <span className="module-details-number">{activeModule.number}</span>
          </div>

          <p>{activeModule.description}</p>

          <div className="module-purpose">
            <span>الهدف من القسم</span>
            <strong>{activeModule.purpose}</strong>
          </div>
        </div>

        <div className="system-map-note">
          <span>ملاحظة</span>
          <p>
            الخريطة توضح الهيكل الوظيفي للنظام، بينما يتم تنفيذ الربط الفعلي بين
            الواجهة والـ Backend وقاعدة البيانات ضمن مرحلة تطوير وربط الخدمات
            الخلفية.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SystemMap;
