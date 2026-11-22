import "./tablesList.css";

const TablesList = ({ tables, onEdit, onDelete }) => {
  return (
    <section className="tables-list-card">
      <div className="tables-list-heading">
        <div>
          <h2>قائمة الطاولات</h2>
          <p>جميع الطاولات المسجلة في النظام</p>
        </div>

        <span className="tables-count">{tables.length} طاولة</span>
      </div>

      {tables.length === 0 ? (
        <div className="tables-empty-state">
          <div className="tables-empty-icon">+</div>
          <h3>لا توجد طاولات حتى الآن</h3>
          <p>ابدأ بإضافة أول طاولة من خلال النموذج بالأعلى</p>
        </div>
      ) : (
        <div className="tables-list-wrapper">
          <table className="tables-list">
            <thead>
              <tr>
                <th>#</th>
                <th>اسم الطاولة</th>
                <th>رقم الطاولة</th>
                <th>الإجراءات</th>
              </tr>
            </thead>

            <tbody>
              {tables.map((table, index) => (
                <tr key={table.id}>
                  <td>{index + 1}</td>

                  <td className="table-name-cell">{table.name}</td>

                  <td>{table.number}</td>

                  <td>
                    <div className="tables-list-actions">
                      <button
                        type="button"
                        className="table-edit-action"
                        onClick={() => onEdit(table)}
                      >
                        تعديل
                      </button>

                      <button
                        type="button"
                        className="table-delete-action"
                        onClick={() => onDelete(table.id)}
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

export default TablesList;
