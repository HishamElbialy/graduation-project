import "./invoiceDetailsModal.css";

const InvoiceDetailsModal = ({
  invoice,
  onClose,
  getSupplierName,
  getWarehouseName,
  getUnitName,
  formatNumber,
  getItemTotal,
}) => {
  if (!invoice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-modal-overlay" onClick={onClose}>
      <div className="invoice-modal" onClick={(e) => e.stopPropagation()}>
        <div className="invoice-modal-header">
          <div>
            <h2>تفاصيل فاتورة الشراء</h2>
            <p>رقم الفاتورة: #{invoice.id}</p>
          </div>

          <button type="button" className="close-modal-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="invoice-modal-body">
          <div className="invoice-print-area">
            <div className="print-heading">
              <h2>فاتورة شراء</h2>
              <p>تفاصيل فاتورة المشتريات</p>
            </div>

            <div className="invoice-details-grid">
              <div>
                <span>رقم الفاتورة</span>
                <strong>#{invoice.id}</strong>
              </div>

              <div>
                <span>المورد</span>
                <strong>{getSupplierName(invoice.supplierId)}</strong>
              </div>

              <div>
                <span>المخزن</span>
                <strong>{getWarehouseName(invoice.warehouseId)}</strong>
              </div>

              <div>
                <span>تاريخ الفاتورة</span>
                <strong>{invoice.date}</strong>
              </div>
            </div>

            <h3 className="invoice-items-title">أصناف الفاتورة</h3>

            <div className="invoice-table-wrapper">
              <table className="invoice-table details-table">
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
                  </tr>
                </thead>

                <tbody>
                  {invoice.items.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.itemName}</td>
                      <td>{getUnitName(item.unit)}</td>
                      <td>{formatNumber(item.quantity)}</td>
                      <td>{formatNumber(item.purchasePrice)}</td>
                      <td>{formatNumber(item.wholesalePrice)}</td>
                      <td>{formatNumber(item.salePrice)}</td>
                      <td className="item-total">
                        {formatNumber(getItemTotal(item))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="invoice-details-total">
              <span>إجمالي الفاتورة</span>
              <strong>{formatNumber(invoice.total)}</strong>
            </div>
          </div>
        </div>

        <div className="invoice-modal-footer">
          <button type="button" className="close-details-btn" onClick={onClose}>
            إغلاق
          </button>

          <button
            type="button"
            className="print-invoice-btn"
            onClick={handlePrint}
          >
            طباعة الفاتورة
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsModal;
