import { useState } from "react";
import "./permissionsSection.css";

const permissions = [
  {
    id: "managePermissions",
    number: "01",
    title: "تعديل الصلاحيات",
    subtitle: "Manage Permissions",
    description:
      "التحكم في صلاحيات المستخدمين وتحديد الوظائف التي يمكن لكل حساب الوصول إليها داخل النظام.",
    access: "التحكم في إعدادات الوصول",
    icon: "⚙",
  },
  {
    id: "categories",
    number: "02",
    title: "إضافة الأصناف",
    subtitle: "Manage Categories",
    description:
      "السماح للمستخدم بالتعامل مع قسم الأصناف وإضافة بيانات الأصناف وتنظيمها داخل النظام.",
    access: "إدارة بيانات الأصناف",
    icon: "▦",
  },
  {
    id: "suppliers",
    number: "03",
    title: "إضافة الموردين",
    subtitle: "Manage Suppliers",
    description:
      "السماح للمستخدم بإضافة بيانات الموردين والتعامل مع معلوماتهم المسجلة داخل النظام.",
    access: "إدارة بيانات الموردين",
    icon: "♙",
  },
  {
    id: "purchases",
    number: "04",
    title: "إضافة فاتورة شراء",
    subtitle: "Create Purchase Invoice",
    description:
      "السماح للمستخدم بإنشاء فواتير الشراء وإضافة الأصناف والكميات والأسعار الخاصة بها.",
    access: "إنشاء فواتير الشراء",
    icon: "▤",
  },
  {
    id: "tables",
    number: "05",
    title: "إضافة الطاولات",
    subtitle: "Manage Tables",
    description:
      "السماح للمستخدم بإضافة الطاولات وتسجيل بياناتها والتعامل مع قائمة الطاولات.",
    access: "إدارة بيانات الطاولات",
    icon: "▥",
  },
  {
    id: "sales",
    number: "06",
    title: "فاتورة بيع",
    subtitle: "Sales Invoice",
    description: "صلاحية مخصصة لوظائف فواتير البيع ضمن النظام.",
    access: "وظائف فواتير البيع",
    icon: "▧",
  },
];

const PermissionsSection = () => {
  const [activePermission, setActivePermission] = useState(permissions[0].id);

  const selectedPermission = permissions.find(
    (permission) => permission.id === activePermission
  );

  return (
    <section className="permissions-section" id="permissions">
      <div className="permissions-container">
        <div className="permissions-heading">
          <span className="section-eyebrow">ACCESS CONTROL</span>

          <h2>
            كل مستخدم،
            <span> بصلاحياته.</span>
          </h2>

          <p>
            يوفر النظام إمكانية تخصيص صلاحيات المستخدمين، بحيث يتم تنظيم الوصول
            إلى الوظائف المختلفة وفقًا لمسؤوليات كل حساب.
          </p>
        </div>

        <div className="permissions-layout">
          <div className="permissions-list">
            <div className="permissions-list-header">
              <div>
                <strong>صلاحيات النظام</strong>
                <span>Available permissions</span>
              </div>

              <span className="permissions-total">
                {String(permissions.length).padStart(2, "0")}
              </span>
            </div>

            {permissions.map((permission) => (
              <button
                key={permission.id}
                type="button"
                className={`permission-item ${
                  activePermission === permission.id ? "active" : ""
                }`}
                onClick={() => setActivePermission(permission.id)}
                aria-pressed={activePermission === permission.id}
              >
                <span className="permission-item-number">
                  {permission.number}
                </span>

                <span className="permission-item-icon">{permission.icon}</span>

                <span className="permission-item-info">
                  <strong>{permission.title}</strong>
                  <small>{permission.subtitle}</small>
                </span>

                <span className="permission-item-arrow">←</span>
              </button>
            ))}
          </div>

          <div className="permission-details" key={selectedPermission.id}>
            <div className="permission-details-top">
              <span>USER ACCESS / {selectedPermission.number}</span>

              <span className="permission-details-icon">
                {selectedPermission.icon}
              </span>
            </div>

            <div className="permission-details-main">
              <span className="section-eyebrow">
                {selectedPermission.subtitle}
              </span>

              <h3>{selectedPermission.title}</h3>

              <p>{selectedPermission.description}</p>

              <div className="permission-access-preview">
                <div className="permission-access-heading">
                  <span className="permission-access-check">✓</span>

                  <div>
                    <strong>نطاق الصلاحية</strong>
                    <small>Permission scope</small>
                  </div>
                </div>

                <div className="permission-access-value">
                  {selectedPermission.access}
                </div>
              </div>

              <div className="permission-security-note">
                <span>i</span>
                <p>
                  يتم تحديد الصلاحيات لكل مستخدم من خلال شاشة إدارة المستخدمين.
                </p>
              </div>
            </div>

            <div className="permission-details-footer">
              <span>CAFE MANAGEMENT SYSTEM</span>
              <span>{selectedPermission.number} / 06</span>
            </div>
          </div>
        </div>

        <div className="permissions-bottom">
          <div className="permissions-bottom-icon">♙</div>

          <div>
            <strong>إدارة مركزية للمستخدمين</strong>
            <p>
              يمكن للإدارة تنظيم حسابات المستخدمين وتخصيص الصلاحيات بما يتناسب
              مع احتياجات العمل.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermissionsSection;
