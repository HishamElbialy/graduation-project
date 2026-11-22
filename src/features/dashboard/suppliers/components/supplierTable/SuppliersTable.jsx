import "./suppliersTable.css";

const SuppliersTable = ({ suppliers, onEdit, onDelete }) => {
  return (
    <section className="suppliers-table-card">
      <div className="suppliers-table-heading">
        <div>
          <h2>قائمة الموردين</h2>
          <p>جميع الموردين المسجلين في النظام</p>
        </div>

        <span className="suppliers-count">{suppliers.length} مورد</span>
      </div>

      {suppliers.length === 0 ? (
        <div className="suppliers-empty-state">
          <div className="suppliers-empty-icon">+</div>
          <h3>لا يوجد موردين حتى الآن</h3>
          <p>ابدأ بإضافة أول مورد من خلال النموذج بالأعلى</p>
        </div>
      ) : (
        <div className="suppliers-table-wrapper">
          <table className="suppliers-table">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم المورد</th>
                <th>العنوان</th>
                <th>رقم الموبايل</th>
                <th>الإجراءات</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={supplier.id}>
                  <td>{index + 1}</td>

                  <td className="supplier-name-cell">{supplier.name}</td>

                  <td>{supplier.address}</td>

                  <td dir="ltr">{supplier.phone}</td>

                  <td>
                    <div className="suppliers-table-actions">
                      <button
                        type="button"
                        className="supplier-edit-action"
                        onClick={() => onEdit(supplier)}
                      >
                        تعديل
                      </button>

                      <button
                        type="button"
                        className="supplier-delete-action"
                        onClick={() => onDelete(supplier.id)}
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
      )}
    </section>
  );
};

export default SuppliersTable;
