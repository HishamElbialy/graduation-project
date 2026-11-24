import { useState } from "react";
import "./workflowSection.css";
import { workflowSteps } from "./workflowData";

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const selectedStep = workflowSteps[activeStep];

  return (
    <section className="workflow-section" id="workflow">
      <div className="workflow-container">
        <div className="workflow-heading">
          <span className="section-eyebrow">HOW IT WORKS</span>

          <h2>
            رحلة العمل،
            <span> خطوة بخطوة.</span>
          </h2>

          <p>
            من لحظة تسجيل الدخول وحتى إدارة العمليات اليومية، يوفر النظام مسارًا
            واضحًا لتنظيم العمل والوصول إلى الوظائف المطلوبة.
          </p>
        </div>

        <div className="workflow-content">
          <div className="workflow-timeline">
            {workflowSteps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                className={`workflow-step ${
                  activeStep === index ? "active" : ""
                }`}
                onClick={() => setActiveStep(index)}
                aria-pressed={activeStep === index}
              >
                <span className="workflow-step-number">{step.number}</span>

                <span className="workflow-step-info">
                  <strong>{step.title}</strong>
                  <small>{step.subtitle}</small>
                </span>

                <span className="workflow-step-arrow">←</span>
              </button>
            ))}
          </div>

          <div className="workflow-details" key={selectedStep.number}>
            <div className="workflow-details-top">
              <span className="workflow-details-label">
                WORKFLOW / {selectedStep.number}
              </span>

              <span className="workflow-details-icon">{selectedStep.icon}</span>
            </div>

            <div className="workflow-details-content">
              <span className="section-eyebrow">{selectedStep.subtitle}</span>

              <h3>{selectedStep.title}</h3>

              <p>{selectedStep.description}</p>

              <div className="workflow-details-divider" />

              <h4>ماذا يحدث في هذه المرحلة؟</h4>

              <ul>
                {selectedStep.details.map((detail, index) => (
                  <li key={index}>
                    <span>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="workflow-details-footer">
              <span>CAFE MANAGEMENT SYSTEM</span>

              <span>{selectedStep.number} / 05</span>
            </div>
          </div>
        </div>

        <div className="workflow-note">
          <span className="workflow-note-icon">i</span>
          <p>
            تختلف الوظائف المتاحة حسب صلاحيات الحساب، ويتم تطوير ربط العمليات
            بقاعدة البيانات من خلال واجهة الـ API.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
