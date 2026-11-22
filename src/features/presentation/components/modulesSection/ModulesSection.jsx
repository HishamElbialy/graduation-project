import { useState } from "react";
import { modules } from "./modulesData";
import "./modulesSection.css";

const ModulesSection = () => {
  const [activeModule, setActiveModule] = useState("categories");

  const selectedModule = modules.find((module) => module.id === activeModule);

  return (
    <section className="modules-section" id="modules">
      <div className="modules-container">
        <div className="modules-heading">
          <div className="modules-heading-content">
            <span className="section-eyebrow">SYSTEM MODULES</span>

            <h2>
              كل وظيفة لها
              <span> مكانها.</span>
            </h2>

            <p>
              تم تصميم النظام ليجمع الوظائف الأساسية لإدارة الكافيه في مكان
              واحد، مع تقسيم واضح يساعد على سهولة الاستخدام وتنظيم العمل.
            </p>
          </div>

          <div className="modules-count">
            <strong>07</strong>
            <span>وحدات النظام</span>
          </div>
        </div>

        <div className="modules-content">
          <div className="modules-list">
            {modules.map((module) => (
              <button
                key={module.id}
                type="button"
                className={`module-card ${
                  activeModule === module.id ? "active" : ""
                }`}
                onClick={() => setActiveModule(module.id)}
                aria-pressed={activeModule === module.id}
              >
                <span className="module-card-number">{module.number}</span>

                <span className="module-card-symbol">{module.symbol}</span>

                <span className="module-card-info">
                  <strong>{module.title}</strong>
                  <small>{module.subtitle}</small>
                </span>

                <span className={`module-card-status ${module.statusType}`}>
                  {module.status}
                </span>

                <span className="module-card-arrow">←</span>
              </button>
            ))}
          </div>

          {selectedModule && (
            <div className="module-section-details" key={selectedModule.id}>
              <div className="module-details-top">
                <span className="module-details-number">
                  {selectedModule.number}
                </span>

                <span
                  className={`module-details-status ${selectedModule.statusType}`}
                >
                  {selectedModule.status}
                </span>
              </div>

              <div className="module-details-heading">
                <span className="module-details-symbol">
                  {selectedModule.symbol}
                </span>

                <div>
                  <span className="section-eyebrow">
                    {selectedModule.subtitle}
                  </span>

                  <h3>{selectedModule.title}</h3>
                </div>
              </div>

              <p className="module-details-description">
                {selectedModule.description}
              </p>

              <div className="module-details-divider" />

              <h4>الوظائف الأساسية</h4>

              <ul className="module-features">
                {selectedModule.features.map((feature, index) => (
                  <li key={index}>
                    <span className="module-feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="module-details-footer">
                <span>CAFE MANAGEMENT SYSTEM</span>
                <span>{selectedModule.number} / 07</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
