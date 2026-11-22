import { Link } from "react-router-dom";
import "./recentInvoices.css";

const RecentInvoices = ({ invoices }) => {
  const formatDate = (date) => {
    return new Date(`${date}T00:00:00`).toLocaleDateString("ar-EG");
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("ar-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="recent-invoices-section">
      <div className="home-section-header invoices-header">
        <div>
          <h3>آخر فواتير الشراء</h3>
          <p>أحدث فواتير الشراء التي تم تسجيلها</p>
        </div>

        <Link
          to="/dashboardLayout/purchaseInvoices"
          className="view-all-invoices"
        >
          عرض الكل
          <span>←</span>
        </Link>
      </div>

      {invoices.length > 0 ? (
        <div className="recent-invoices-table-wrapper">
          <table className="recent-invoices-table">
            <thead>
              <tr>
                <th>رقم الفاتورة</th>
                <th>المورد</th>
                <th>التاريخ</th>
                <th>الإجمالي</th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>
                    <span className="invoice-number">
                      {invoice.invoiceNumber}
                    </span>
                  </td>

                  <td>{invoice.supplier}</td>

                  <td>{formatDate(invoice.date)}</td>

                  <td className="invoice-amount">
                    {formatCurrency(invoice.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="recent-invoices-empty">
          لا توجد فواتير شراء حتى الآن
        </div>
      )}
    </section>
  );
};

export default RecentInvoices;
