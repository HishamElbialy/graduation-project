import { useState } from "react";
import "./categories.css";
import Button from "../../../components/common/button/Button";

const initialCategories = [];

const groups = [
  { value: "cold-drinks", label: "مشروبات باردة" },
  { value: "hot-drinks", label: "مشروبات ساخنة" },
  { value: "food", label: "مأكولات" },
  { value: "desserts", label: "حلويات" },
];

const units = [
  { value: "piece", label: "قطعة" },
  { value: "cup", label: "كوب" },
  { value: "bottle", label: "زجاجة" },
  { value: "plate", label: "طبق" },
  { value: "kg", label: "كيلو جرام" },
];

const Categories = () => {
  const [categories, setCategories] = useState(initialCategories);

  const [formData, setFormData] = useState({
    name: "",
    group: "",
    unit: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      group: "",
      unit: "",
    });

    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.group || !formData.unit) {
      return;
    }

    if (editingId) {
      setCategories((prev) =>
        prev.map((category) =>
          category.id === editingId ? { ...category, ...formData } : category
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        ...formData,
      };

      setCategories((prev) => [...prev, newCategory]);
    }

    resetForm();
  };

  const handleEdit = (category) => {
    setFormData({
      name: category.name,
      group: category.group,
      unit: category.unit,
    });

    setEditingId(category.id);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("هل أنت متأكد من حذف هذا الصنف؟");

    if (!confirmed) return;

    setCategories((prev) => prev.filter((category) => category.id !== id));

    if (editingId === id) {
      resetForm();
    }
  };

  const getGroupLabel = (value) =>
    groups.find((group) => group.value === value)?.label || value;

  const getUnitLabel = (value) =>
    units.find((unit) => unit.value === value)?.label || value;

  return (
    <div className="categories-page" dir="rtl">
      {/* Page Header */}
      <div className="categories-header">
        <div>
          <h1>إدارة الأصناف</h1>
          <p>إضافة وتنظيم أصناف المطعم والمشروبات</p>
        </div>

        <div className="categories-count">
          <span>إجمالي الأصناف</span>
          <strong>{categories.length}</strong>
        </div>
      </div>

      {/* Category Form */}
      <section className="category-form-card">
        <div className="section-header">
          <div>
            <h2>{editingId ? "تعديل الصنف" : "إضافة صنف جديد"}</h2>
            <p>أدخل بيانات الصنف وحدد المجموعة والوحدة</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="category-form-grid">
            <div className="form-group">
              <label htmlFor="category-name">اسم الصنف</label>

              <input
                id="category-name"
                type="text"
                name="name"
                placeholder="مثال: عصير برتقال"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category-group">المجموعة</label>

              <select
                id="category-group"
                name="group"
                value={formData.group}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  اختر المجموعة
                </option>

                {groups.map((group) => (
                  <option key={group.value} value={group.value}>
                    {group.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category-unit">الوحدة</label>

              <select
                id="category-unit"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  اختر الوحدة
                </option>

                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-actions">
            {editingId && (
              <Button type="button" variant="cancel" onClick={resetForm}>
                إلغاء
              </Button>
            )}

            <Button type="submit" variant="primary">
              {editingId ? "حفظ التعديلات" : "إضافة الصنف"}
            </Button>
          </div>
        </form>
      </section>

      {/* Categories Table */}
      <section className="categories-table-card">
        <div className="section-header">
          <div>
            <h2>الأصناف المضافة</h2>
            <p>جميع الأصناف المسجلة في النظام</p>
          </div>

          <span className="table-count">{categories.length} صنف</span>
        </div>

        <div className="table-wrapper">
          <table className="categories-table">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم الصنف</th>
                <th>المجموعة</th>
                <th>الوحدة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>

            <tbody>
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr key={category.id}>
                    <td>{index + 1}</td>

                    <td className="category-name">{category.name}</td>

                    <td>
                      <span className="group-badge">
                        {getGroupLabel(category.group)}
                      </span>
                    </td>

                    <td>{getUnitLabel(category.unit)}</td>

                    <td>
                      <div className="table-actions">
                        <button
                          type="button"
                          className="edit-btn"
                          onClick={() => handleEdit(category)}
                        >
                          تعديل
                        </button>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => handleDelete(category.id)}
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">
                    <div className="empty-state">
                      <div className="empty-icon">＋</div>
                      <h3>لا توجد أصناف حتى الآن</h3>
                      <p>ابدأ بإضافة أول صنف من خلال النموذج بالأعلى</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Categories;
