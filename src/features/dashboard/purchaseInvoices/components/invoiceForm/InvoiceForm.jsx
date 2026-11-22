import "./invoiceForm.css"

const InvoiceForm = ({
  invoiceData,
  itemForm,
  suppliers,
  warehouses,
  units,
  editingItemId,
  onInvoiceChange,
  onItemChange,
  onSubmit,
  onResetItemForm,
}) => {
  return (
    <>
      {/* Invoice Information */}
      <section className="invoice-card">
        <div className="section-heading">
          <div>
            <h2>بيانات الفاتورة</h2>
            <p>أدخل البيانات الأساسية لفاتورة الشراء</p>
          </div>
          <span className="section-number">01</span>
        </div>

        <div className="invoice-fields">
          <div className="form-group">
            <label htmlFor="supplierId">المورد</label>
            <select
              id="supplierId"
              name="supplierId"
              value={invoiceData.supplierId}
              onChange={onInvoiceChange}
            >
              <option value="">اختر المورد</option>

              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="warehouseId">المخزن</label>
            <select
              id="warehouseId"
              name="warehouseId"
              value={invoiceData.warehouseId}
              onChange={onInvoiceChange}
            >
              <option value="">اختر المخزن</option>

              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="invoiceDate">تاريخ الفاتورة</label>
            <input
              id="invoiceDate"
              type="date"
              name="date"
              value={invoiceData.date}
              onChange={onInvoiceChange}
            />
          </div>
        </div>
      </section>

      {/* Add Item */}
      <section className="invoice-card">
        <div className="section-heading">
          <div>
            <h2>{editingItemId ? "تعديل الصنف" : "إضافة أصناف الفاتورة"}</h2>
            <p>أدخل بيانات كل صنف ثم أضفه إلى الفاتورة</p>
          </div>

          <span className="section-number">02</span>
        </div>

        <form onSubmit={onSubmit}>
          <div className="item-fields">
            <div className="form-group item-name-field">
              <label htmlFor="itemName">اسم الصنف</label>
              <input
                id="itemName"
                type="text"
                name="itemName"
                placeholder="أدخل اسم الصنف"
                value={itemForm.itemName}
                onChange={onItemChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="unit">الوحدة</label>
              <select
                id="unit"
                name="unit"
                value={itemForm.unit}
                onChange={onItemChange}
              >
                <option value="">اختر الوحدة</option>

                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">الكمية</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                min="0.01"
                step="any"
                placeholder="0"
                value={itemForm.quantity}
                onChange={onItemChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="purchasePrice">سعر الشراء</label>
              <input
                id="purchasePrice"
                type="number"
                name="purchasePrice"
                min="0"
                step="any"
                placeholder="0.00"
                value={itemForm.purchasePrice}
                onChange={onItemChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="wholesalePrice">سعر الجملة</label>
              <input
                id="wholesalePrice"
                type="number"
                name="wholesalePrice"
                min="0"
                step="any"
                placeholder="0.00"
                value={itemForm.wholesalePrice}
                onChange={onItemChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="salePrice">سعر البيع</label>
              <input
                id="salePrice"
                type="number"
                name="salePrice"
                min="0"
                step="any"
                placeholder="0.00"
                value={itemForm.salePrice}
                onChange={onItemChange}
              />
            </div>
          </div>

          <div className="item-form-actions">
            {editingItemId && (
              <button
                type="button"
                className="cancel-edit-btn"
                onClick={onResetItemForm}
              >
                إلغاء التعديل
              </button>
            )}

            <button type="submit" className="add-item-btn">
              {editingItemId ? "حفظ التعديل" : "إضافة الصنف"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default InvoiceForm;
