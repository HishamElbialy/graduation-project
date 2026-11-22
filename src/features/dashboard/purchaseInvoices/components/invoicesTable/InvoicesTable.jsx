import "./invoicesTable.css";

const InvoicesTable = ({
  items,
  savedInvoices,
  invoiceTotal,
  getItemTotal,
  getUnitName,
  getSupplierName,
  getWarehouseName,
  formatNumber,
  onEditItem,
  onDeleteItem,
  onSaveInvoice,
  onViewInvoice,
}) => {
  return (
    <>
      {/* Current Invoice Items */}
      <section className="invoice-card">
        <div className="section-heading">
          <div>
            <h2>أصناف الفاتورة</h2>
            <p>الأصناف التي تمت إضافتها إلى الفاتورة الحالية</p>
          </div>

          <span className="items-count">{items.length} أصناف</span>
        </div>

        {items.length > 0 ? (
          <>
            <div className="invoice-table-wrapper">
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>اسم الصنف</th>
                    <th>الوحدة</th>
                    <th>الكمية</th>
                    <th>سعر الشراء</th>
                    <th>سعر الجملة</th>
                    <th>سعر البيع</th>
                    <th>الإجمالي</th>
                    <th>الإجراءات</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className="item-name-cell">{item.itemName}</td>
                      <td>{getUnitName(item.unit)}</td>
                      <td>{formatNumber(item.quantity)}</td>
                      <td>{formatNumber(item.purchasePrice)}</td>
                      <td>{formatNumber(item.wholesalePrice)}</td>
                      <td>{formatNumber(item.salePrice)}</td>

                      <td className="item-total">
                        {formatNumber(getItemTotal(item))}
                      </td>

                      <td>
                        <div className="table-actions">
                          <button
                            type="button"
                            className="edit-action"
                            onClick={() => onEditItem(item)}
                          >
                            تعديل
                          </button>

                          <button
                            type="button"
                            className="delete-action"
                            onClick={() => onDeleteItem(item.id)}
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

            <div className="invoice-footer">
              <div className="invoice-total">
                <span>إجمالي الفاتورة</span>
                <strong>{formatNumber(invoiceTotal)}</strong>
              </div>

              <button
                type="button"
                className="save-invoice-btn"
                onClick={onSaveInvoice}
              >
                حفظ الفاتورة
              </button>
            </div>
          </>
        ) : (
          <div className="empty-items">
            <div className="empty-items-icon">+</div>
            <h3>لا توجد أصناف حتى الآن</h3>
            <p>ابدأ بإضافة الأصناف من النموذج السابق</p>
          </div>
        )}
      </section>

      {/* Saved Invoices */}
      <section className="invoice-card saved-invoices-section">
        <div className="section-heading">
          <div>
            <h2>الفواتير المحفوظة</h2>
            <p>الفواتير التي تم تسجيلها خلال الجلسة الحالية</p>
          </div>

          <span className="items-count">{savedInvoices.length} فواتير</span>
        </div>

        {savedInvoices.length > 0 ? (
          <div className="invoice-table-wrapper">
            <table className="invoice-table saved-invoices-table">
              <thead>
                <tr>
                  <th>رقم الفاتورة</th>
                  <th>المورد</th>
                  <th>المخزن</th>
                  <th>عدد الأصناف</th>
                  <th>التاريخ</th>
                  <th>الإجمالي</th>
                  <th>التفاصيل</th>
                </tr>
              </thead>

              <tbody>
                {savedInvoices.map((invoice, index) => (
                  <tr key={invoice.id}>
                    <td>#{savedInvoices.length - index}</td>
                    <td>{getSupplierName(invoice.supplierId)}</td>
                    <td>{getWarehouseName(invoice.warehouseId)}</td>
                    <td>{invoice.items.length}</td>
                    <td>{invoice.date}</td>

                    <td className="item-total">
                      {formatNumber(invoice.total)}
                    </td>

                    <td>
                      <button
                        type="button"
                        className="view-invoice-btn"
                        onClick={() => onViewInvoice(invoice)}
                      >
                        عرض التفاصيل
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-items saved-empty">
            <p>لا توجد فواتير محفوظة حتى الآن</p>
          </div>
        )}
      </section>
    </>
  );
};

export default InvoicesTable;
