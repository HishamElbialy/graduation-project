import { useState } from "react";
import "./users.css";

const permissionsList = [
  { id: "managePermissions", label: "تعديل الصلاحيات" },
  { id: "addCategories", label: "إضافة الأصناف" },
  { id: "addSuppliers", label: "إضافة الموردين" },
  { id: "addPurchaseInvoice", label: "إضافة فاتورة شراء" },
  { id: "addTables", label: "إضافة الترابيزات" },
  { id: "salesInvoice", label: "فاتورة بيع" },
];

const initialForm = {
  username: "",
  password: "",
  permissions: [],
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);

  // Handle inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle permissions
  const handlePermissionChange = (permissionId) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter((item) => item !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData(initialForm);
    setEditingId(null);
  };

  // Add or update user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim()) return;

    if (!editingId && !formData.password.trim()) return;

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId
            ? {
                ...user,
                username: formData.username,
                password: formData.password ? formData.password : user.password,
                permissions: [...formData.permissions],
              }
            : user
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        username: formData.username,
        password: formData.password,
        permissions: [...formData.permissions],
      };

      setUsers((prev) => [...prev, newUser]);
    }

    resetForm();
  };

  // Edit user
  const handleEdit = (user) => {
    setEditingId(user.id);

    setFormData({
      username: user.username,
      password: "",
      permissions: [...user.permissions],
    });
  };

  // Delete user
  const handleDelete = (id) => {
    const confirmed = window.confirm("هل أنت متأكد من حذف المستخدم؟");

    if (!confirmed) return;

    setUsers((prev) => prev.filter((user) => user.id !== id));

    if (editingId === id) {
      resetForm();
    }
  };

  // Get permission label
  const getPermissionLabel = (permissionId) => {
    return permissionsList.find((permission) => permission.id === permissionId)
      ?.label;
  };

  return (
    <div className="users-page" dir="rtl">
      {/* Page Header */}
      <div className="users-page-header">
        <div>
          <h1>إدارة المستخدمين</h1>
          <p>إضافة المستخدمين وتحديد صلاحيات الوصول للنظام</p>
        </div>

        <div className="users-count-card">
          <span className="users-count-number">{users.length}</span>
          <span>إجمالي المستخدمين</span>
        </div>
      </div>

      {/* User Form */}
      <section className="users-card">
        <div className="users-card-header">
          <h2>{editingId ? "تعديل المستخدم" : "إضافة مستخدم جديد"}</h2>
          <p>
            {editingId
              ? "قم بتعديل بيانات المستخدم وصلاحياته"
              : "أدخل بيانات المستخدم وحدد الصلاحيات المطلوبة"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="users-form-fields">
            {/* Username */}
            <div className="users-field">
              <label htmlFor="username">اسم المستخدم</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="أدخل اسم المستخدم"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="users-field">
              <label htmlFor="password">
                كلمة المرور
                {editingId && (
                  <span className="users-optional"> (اختياري عند التعديل)</span>
                )}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder={
                  editingId
                    ? "اتركها فارغة للاحتفاظ بالحالية"
                    : "أدخل كلمة المرور"
                }
                value={formData.password}
                onChange={handleChange}
                required={!editingId}
              />
            </div>
          </div>

          {/* Permissions */}
          <div className="users-permissions-section">
            <div className="users-permissions-header">
              <h3>صلاحيات المستخدم</h3>
              <span>{formData.permissions.length} صلاحيات محددة</span>
            </div>

            <div className="users-permissions-grid">
              {permissionsList.map((permission) => (
                <label
                  key={permission.id}
                  className={`permission-item ${
                    formData.permissions.includes(permission.id)
                      ? "checked"
                      : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.permissions.includes(permission.id)}
                    onChange={() => handlePermissionChange(permission.id)}
                  />

                  <span className="permission-checkbox"></span>

                  <span className="permission-label">{permission.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Form Buttons */}
          <div className="users-form-actions">
            {editingId && (
              <button
                type="button"
                className="users-btn users-btn-cancel"
                onClick={resetForm}
              >
                إلغاء
              </button>
            )}

            <button type="submit" className="users-btn users-btn-primary">
              {editingId ? "حفظ التعديلات" : "إضافة المستخدم"}
            </button>
          </div>
        </form>
      </section>

      {/* Users Table */}
      <section className="users-card users-table-card">
        <div className="users-card-header users-table-header">
          <div>
            <h2>المستخدمون المضافون</h2>
            <p>عرض وإدارة جميع مستخدمي النظام</p>
          </div>

          <span className="users-table-total">{users.length} مستخدم</span>
        </div>

        {users.length > 0 ? (
          <div className="users-table-wrapper">
            <table className="users-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>اسم المستخدم</th>
                  <th>كلمة المرور</th>
                  <th>الصلاحيات</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>

                    <td>
                      <div className="user-name-cell">
                        <div className="user-avatar">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <span>{user.username}</span>
                      </div>
                    </td>

                    <td>
                      <span className="user-password">••••••••</span>
                    </td>

                    <td>
                      <div className="user-permissions">
                        {user.permissions.length > 0 ? (
                          user.permissions.map((permission) => (
                            <span
                              className="user-permission-tag"
                              key={permission}
                            >
                              {getPermissionLabel(permission)}
                            </span>
                          ))
                        ) : (
                          <span className="no-permissions">
                            لا توجد صلاحيات
                          </span>
                        )}
                      </div>
                    </td>

                    <td>
                      <div className="user-actions">
                        <button
                          type="button"
                          className="user-edit-btn"
                          onClick={() => handleEdit(user)}
                        >
                          تعديل
                        </button>

                        <button
                          type="button"
                          className="user-delete-btn"
                          onClick={() => handleDelete(user.id)}
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="users-empty-state">
            <div className="users-empty-icon">♙</div>
            <h3>لا يوجد مستخدمون حتى الآن</h3>
            <p>ابدأ بإضافة مستخدم جديد من النموذج بالأعلى</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Users;
