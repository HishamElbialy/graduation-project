import { useState } from "react";
import { technologies } from "./technologyData";
import "./technologySection.css";

const TechnologySection = () => {
  const [activeTechnology, setActiveTechnology] = useState("frontend");

  const selectedTechnology = technologies.find(
    (technology) => technology.id === activeTechnology
  );

  return (
    <section className="technology-section" id="technology">
      <div className="technology-container">
        <div className="technology-heading">
          <span className="section-eyebrow">TECHNICAL ARCHITECTURE</span>

          <h2>
            مبني بتقنيات،
            <span> موثوقة وقابلة للتطوير.</span>
          </h2>

          <p>
            يعتمد المشروع على بنية تقنية مقسمة إلى ثلاث طبقات رئيسية، لكل طبقة
            مسؤولية واضحة، مما يسهل تطوير النظام وصيانته.
          </p>
        </div>

        <div className="technology-architecture">
          <div className="architecture-flow">
            <div className="architecture-layer frontend-layer">
              <div className="architecture-layer-icon">R</div>

              <div className="architecture-layer-info">
                <span>01 / PRESENTATION LAYER</span>
                <strong>Frontend</strong>
                <small>React + Vite + JavaScript</small>
              </div>

              <span className="architecture-layer-tag">CLIENT</span>
            </div>

            <div className="architecture-connection">
              <span className="connection-line" />
              <span className="connection-label">HTTP REQUEST / RESPONSE</span>
              <span className="connection-arrow">↓</span>
            </div>

            <div className="architecture-layer backend-layer">
              <div className="architecture-layer-icon">C#</div>

              <div className="architecture-layer-info">
                <span>02 / APPLICATION LAYER</span>
                <strong>Backend</strong>
                <small>ASP.NET Core Web API</small>
              </div>

              <span className="architecture-layer-tag">SERVER</span>
            </div>

            <div className="architecture-connection">
              <span className="connection-line" />
              <span className="connection-label">DATABASE OPERATIONS</span>
              <span className="connection-arrow">↓</span>
            </div>

            <div className="architecture-layer database-layer">
              <div className="architecture-layer-icon">DB</div>

              <div className="architecture-layer-info">
                <span>03 / DATA LAYER</span>
                <strong>Database</strong>
                <small>Microsoft SQL Server</small>
              </div>

              <span className="architecture-layer-tag">STORAGE</span>
            </div>
          </div>

          <div className="architecture-description">
            <span className="section-eyebrow">HOW THE SYSTEM WORKS</span>

            <h3>ثلاث طبقات، تعمل معًا.</h3>

            <p>
              يتفاعل المستخدم مع الواجهة الأمامية، التي ترسل الطلبات إلى الـ
              API. يقوم الـ Backend بمعالجة الطلبات والتواصل مع قاعدة البيانات،
              ثم يعيد النتيجة إلى الواجهة الأمامية لعرضها للمستخدم.
            </p>

            <div className="architecture-benefits">
              <div>
                <span>01</span>
                <strong>Separation of Concerns</strong>
                <small>فصل مسؤوليات كل طبقة</small>
              </div>

              <div>
                <span>02</span>
                <strong>Maintainability</strong>
                <small>سهولة الصيانة والتطوير</small>
              </div>

              <div>
                <span>03</span>
                <strong>Scalability</strong>
                <small>قابلية التوسع مستقبلًا</small>
              </div>
            </div>
          </div>
        </div>

        <div className="technology-details">
          <div className="technology-details-heading">
            <span className="section-eyebrow">TECHNOLOGY STACK</span>
            <h3>دور كل تقنية في المشروع</h3>
          </div>

          <div className="technology-tabs">
            {technologies.map((technology) => (
              <button
                key={technology.id}
                type="button"
                className={`technology-tab ${
                  activeTechnology === technology.id ? "active" : ""
                }`}
                onClick={() => setActiveTechnology(technology.id)}
                aria-pressed={activeTechnology === technology.id}
              >
                <span>{technology.number}</span>
                {technology.title}
              </button>
            ))}
          </div>

          <div className="technology-info-card" key={selectedTechnology.id}>
            <div className="technology-info-icon">
              {selectedTechnology.icon}
            </div>

            <div className="technology-info-content">
              <span className="section-eyebrow">
                {selectedTechnology.title} / {selectedTechnology.language}
              </span>

              <h4>{selectedTechnology.name}</h4>

              <p>{selectedTechnology.description}</p>

              <strong className="technology-responsibilities-title">
                المسؤوليات الرئيسية
              </strong>

              <ul>
                {selectedTechnology.responsibilities.map(
                  (responsibility, index) => (
                    <li key={index}>
                      <span>✓</span>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="technology-note">
          <span>i</span>
          <p>
            يوضح هذا القسم التصميم التقني المستهدف للمشروع. يتم استكمال تكامل
            الواجهة الأمامية مع الـ API وقاعدة البيانات ضمن مراحل تنفيذ المشروع.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
