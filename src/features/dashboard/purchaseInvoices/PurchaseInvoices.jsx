import { useState } from "react";
import "./purchaseInvoices.css";

import InvoiceForm from "./components/invoiceForm/InvoiceForm";
import InvoicesTable from "./components/invoicesTable/InvoicesTable";
import InvoiceDetailsModal from "./components/invoiceDetailsModal/InvoiceDetailsModal";

const suppliers = [
  { id: 1, name: "مورد الخامات الأول" },
  { id: 2, name: "شركة النور للتوريدات" },
  { id: 3, name: "مؤسسة الأمل" },
];

const warehouses = [
  { id: 1, name: "المخزن الرئيسي" },
  { id: 2, name: "مخزن الفرع الأول" },
];

const units = [
  { value: "piece", label: "قطعة" },
  { value: "kg", label: "كيلو جرام" },
  { value: "gram", label: "جرام" },
  { value: "liter", label: "لتر" },
  { value: "box", label: "عبوة" },
  { value: "carton", label: "كرتونة" },
];

const getLocalDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const initialInvoiceData = {
  supplierId: "",
  warehouseId: "",
  date: getLocalDate(),
};

const initialItemData = {
  itemName: "",
  unit: "",
  quantity: "",
  purchasePrice: "",
  wholesalePrice: "",
  salePrice: "",
};

const PurchaseInvoices = () => {
  const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
  const [itemForm, setItemForm] = useState(initialItemData);

  const [items, setItems] = useState([]);
  const [savedInvoices, setSavedInvoices] = useState([]);

  const [editingItemId, setEditingItemId] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Invoice data handlers
  const handleInvoiceChange = (e) => {
    const { name, value } = e.target;

    setInvoiceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Item form handlers
  const handleItemChange = (e) => {
    const { name, value } = e.target;

    setItemForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetItemForm = () => {
    setItemForm(initialItemData);
    setEditingItemId(null);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (
      !itemForm.itemName.trim() ||
      !itemForm.unit ||
      !itemForm.quantity ||
      Number(itemForm.quantity) <= 0 ||
      itemForm.purchasePrice === "" ||
      Number(itemForm.purchasePrice) < 0 ||
      itemForm.wholesalePrice === "" ||
      Number(itemForm.wholesalePrice) < 0 ||
      itemForm.salePrice === "" ||
      Number(itemForm.salePrice) < 0
    ) {
      alert("من فضلك أدخل بيانات الصنف بشكل صحيح");
      return;
    }

    const itemData = {
      ...itemForm,
      id: editingItemId || Date.now(),
      itemName: itemForm.itemName.trim(),
      quantity: Number(itemForm.quantity),
      purchasePrice: Number(itemForm.purchasePrice),
      wholesalePrice: Number(itemForm.wholesalePrice),
      salePrice: Number(itemForm.salePrice),
    };

    if (editingItemId) {
      setItems((prev) =>
        prev.map((item) => (item.id === editingItemId ? itemData : item))
      );
    } else {
      setItems((prev) => [...prev, itemData]);
    }

    resetItemForm();
  };

  // Edit item
  const handleEditItem = (item) => {
    setItemForm({
      itemName: item.itemName,
      unit: item.unit,
      quantity: String(item.quantity),
      purchasePrice: String(item.purchasePrice),
      wholesalePrice: String(item.wholesalePrice),
      salePrice: String(item.salePrice),
    });

    setEditingItemId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete item
  const handleDeleteItem = (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذا الصنف؟")) return;

    setItems((prev) => prev.filter((item) => item.id !== id));

    if (editingItemId === id) {
      resetItemForm();
    }
  };

  // Invoice calculations
  const getItemTotal = (item) => item.quantity * item.purchasePrice;

  const invoiceTotal = items.reduce(
    (total, item) => total + getItemTotal(item),
    0
  );

  // Save invoice
  const handleSaveInvoice = () => {
    if (
      !invoiceData.supplierId ||
      !invoiceData.warehouseId ||
      !invoiceData.date
    ) {
      alert("من فضلك أكمل بيانات الفاتورة");
      return;
    }

    if (items.length === 0) {
      alert("يجب إضافة صنف واحد على الأقل للفاتورة");
      return;
    }

    const newInvoice = {
      id: Date.now(),
      ...invoiceData,
      items: [...items],
      total: invoiceTotal,
    };

    setSavedInvoices((prev) => [newInvoice, ...prev]);

    setInvoiceData({
      ...initialInvoiceData,
      date: getLocalDate(),
    });

    setItems([]);
    resetItemForm();

    alert("تم حفظ الفاتورة بنجاح");
  };

  // Display helpers
  const getSupplierName = (id) =>
    suppliers.find((supplier) => supplier.id === Number(id))?.name || "-";

  const getWarehouseName = (id) =>
    warehouses.find((warehouse) => warehouse.id === Number(id))?.name || "-";

  const getUnitName = (value) =>
    units.find((unit) => unit.value === value)?.label || "-";

  const formatNumber = (value) =>
    Number(value).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  return (
    <div className="purchase-invoices-page" dir="rtl">
      <div className="page-header">
        <div>
          <h1>فواتير الشراء</h1>
          <p>إضافة وإدارة فواتير المشتريات والأصناف</p>
        </div>
      </div>

      <InvoiceForm
        invoiceData={invoiceData}
        itemForm={itemForm}
        suppliers={suppliers}
        warehouses={warehouses}
        units={units}
        editingItemId={editingItemId}
        onInvoiceChange={handleInvoiceChange}
        onItemChange={handleItemChange}
        onSubmit={handleAddItem}
        onResetItemForm={resetItemForm}
      />

      <InvoicesTable
        items={items}
        savedInvoices={savedInvoices}
        invoiceTotal={invoiceTotal}
        getItemTotal={getItemTotal}
        getUnitName={getUnitName}
        getSupplierName={getSupplierName}
        getWarehouseName={getWarehouseName}
        formatNumber={formatNumber}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
        onSaveInvoice={handleSaveInvoice}
        onViewInvoice={handleViewInvoice}
      />

      <InvoiceDetailsModal
        invoice={selectedInvoice}
        onClose={() => setSelectedInvoice(null)}
        getSupplierName={getSupplierName}
        getWarehouseName={getWarehouseName}
        getUnitName={getUnitName}
        formatNumber={formatNumber}
        getItemTotal={getItemTotal}
      />
    </div>
  );
};

export default PurchaseInvoices;
