import "./suppliersForm.css";

const SupplierForm = ({
  formData,
  editingSupplierId,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <section className="supplier-card">
      <div className="supplier-section-heading">
        <div className="supplier-section-number">01</div>

        <div>
          <h2>
            {editingSupplierId ? "تعديل بيانات المورد" : "إضافة مورد جديد"}
          </h2>
          <p>أدخل البيانات الأساسية للمورد</p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="supplier-form-fields">
          <div className="supplier-form-group">
            <label htmlFor="supplier-name">اسم المورد</label>

            <input
              id="supplier-name"
              type="text"
              name="name"
              placeholder="أدخل اسم المورد"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="supplier-form-group">
            <label htmlFor="supplier-address">العنوان</label>

            <input
              id="supplier-address"
              type="text"
              name="address"
              placeholder="أدخل عنوان المورد"
              value={formData.address}
              onChange={onChange}
              required
            />
          </div>

          <div className="supplier-form-group">
            <label htmlFor="supplier-phone">رقم الموبايل</label>

            <input
              id="supplier-phone"
              type="tel"
              name="phone"
              placeholder="أدخل رقم الموبايل"
              value={formData.phone}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="supplier-form-actions">
          <button type="submit" className="supplier-submit-btn">
            {editingSupplierId ? "حفظ التعديلات" : "إضافة المورد"}
          </button>

          {editingSupplierId && (
            <button
              type="button"
              className="supplier-cancel-btn"
              onClick={onReset}
            >
              إلغاء التعديل
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default SupplierForm;
