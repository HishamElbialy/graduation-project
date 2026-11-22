import "./tablesForm.css";

const TableForm = ({
  formData,
  editingTableId,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <section className="table-form-card">
      <div className="table-form-heading">
        <div className="table-section-number">01</div>

        <div>
          <h2>
            {editingTableId ? "تعديل بيانات الطاولة" : "إضافة طاولة جديدة"}
          </h2>
          <p>أدخل اسم ورقم الطاولة</p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="table-form-fields">
          <div className="table-form-group">
            <label htmlFor="table-name">اسم الطاولة</label>

            <input
              id="table-name"
              type="text"
              name="name"
              placeholder="مثال: طاولة خارجية"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="table-form-group">
            <label htmlFor="table-number">رقم الطاولة</label>

            <input
              id="table-number"
              type="number"
              name="number"
              placeholder="أدخل رقم الطاولة"
              min="1"
              step="1"
              value={formData.number}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="table-form-actions">
          <button type="submit" className="table-submit-btn">
            {editingTableId ? "حفظ التعديلات" : "إضافة الطاولة"}
          </button>

          {editingTableId && (
            <button
              type="button"
              className="table-cancel-btn"
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

export default TableForm;
