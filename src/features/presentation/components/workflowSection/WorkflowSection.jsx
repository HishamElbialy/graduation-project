import { useState } from "react";
import "./workflowSection.css";

const workflowSteps = [
  {
    number: "01",
    title: "تسجيل الدخول",
    subtitle: "Authentication",
    description:
      "يبدأ المستخدم رحلته من شاشة تسجيل الدخول، حيث يتم التحقق من بياناته قبل السماح له بالدخول إلى النظام.",
    details: [
      "إدخال اسم المستخدم وكلمة المرور",
      "التحقق من بيانات الحساب",
      "الوصول إلى النظام بعد نجاح تسجيل الدخول",
    ],
    icon: "↗",
  },
  {
    number: "02",
    title: "لوحة التحكم",
    subtitle: "Dashboard",
    description:
      "بعد تسجيل الدخول، يصل المستخدم إلى الواجهة الرئيسية التي تمثل نقطة البداية للتنقل بين أقسام النظام.",
    details: [
      "الوصول إلى الأقسام المختلفة",
      "التنقل من خلال القائمة الجانبية",
      "استخدام الواجهة حسب الصلاحيات المتاحة",
    ],
    icon: "⌂",
  },
  {
    number: "03",
    title: "إدارة البيانات",
    subtitle: "Data Management",
    description:
      "يتم إعداد البيانات الأساسية للنظام من خلال إدارة الأصناف والموردين والطاولات، مع إمكانية تحديثها عند الحاجة.",
    details: [
      "إضافة وتصنيف الأصناف",
      "تسجيل بيانات الموردين",
      "إضافة وتنظيم الطاولات",
    ],
    icon: "▦",
  },
  {
    number: "04",
    title: "تسجيل المشتريات",
    subtitle: "Purchase Process",
    description:
      "يستطيع المستخدم إنشاء فاتورة شراء وتحديد المورد والمخزن وإضافة الأصناف والكميات والأسعار الخاصة بكل صنف.",
    details: [
      "اختيار المورد والمخزن",
      "إضافة الأصناف إلى الفاتورة",
      "تحديد الكمية والأسعار",
      "حفظ الفاتورة ومراجعة تفاصيلها",
    ],
    icon: "▤",
  },
  {
    number: "05",
    title: "إدارة المستخدمين",
    subtitle: "Users & Permissions",
    description:
      "تتيح الإدارة تنظيم حسابات المستخدمين وتحديد الصلاحيات التي يتحكم من خلالها كل مستخدم في وظائف النظام.",
    details: [
      "إنشاء حسابات المستخدمين",
      "تحديد صلاحيات كل حساب",
      "تنظيم الوصول إلى وظائف النظام",
    ],
    icon: "♙",
  },
];

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
