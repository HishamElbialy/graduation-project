import "./introductionSection.css";

const highlights = [
  {
    number: "01",
    title: "إدارة مركزية",
    description: "تنظيم بيانات وعمليات الكافيه من خلال نظام واحد.",
  },
  {
    number: "02",
    title: "سهولة الاستخدام",
    description: "واجهة واضحة تساعد المستخدم على الوصول للوظائف بسهولة.",
  },
  {
    number: "03",
    title: "تنظيم الصلاحيات",
    description: "إدارة المستخدمين وتحديد الوظائف المتاحة لكل مستخدم.",
  },
];

const IntroductionSection = () => {
  return (
    <section className="introduction-section" id="about">
      <div className="introduction-container">
        <div className="introduction-heading">
          <span className="section-eyebrow">ABOUT THE SYSTEM</span>

          <h2>
            نظام واحد،
            <br />
            <span>لإدارة كل التفاصيل.</span>
          </h2>

          <p>
            تم تصميم نظام إدارة الكافيه لتجميع العمليات الإدارية الأساسية في
            مكان واحد، وتسهيل متابعة البيانات وتنظيم العمل اليومي من خلال واجهة
            بسيطة ومنظمة.
          </p>
        </div>

        <div className="introduction-highlights">
          {highlights.map((item) => (
            <div className="introduction-highlight" key={item.number}>
              <span className="highlight-number">{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="highlight-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>

      <div className="introduction-bottom">
        <span>BUILT FOR BETTER MANAGEMENT</span>
        <span>01 / 07</span>
      </div>
    </section>
  );
};

export default IntroductionSection;
