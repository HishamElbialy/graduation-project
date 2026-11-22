import { useState } from "react";

import SupplierForm from "./components/supplierForm/SuppliersForm";
import SuppliersTable from "./components/supplierTable/SuppliersTable";

import "./suppliers.css";

const initialFormData = {
  name: "",
  address: "",
  phone: "",
};

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editingSupplierId, setEditingSupplierId] = useState(null);

  // Handle Form Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Reset Form
  const resetForm = () => {
    setFormData(initialFormData);
    setEditingSupplierId(null);
  };

  // Add / Update Supplier
  const handleSubmit = (e) => {
    e.preventDefault();

    const supplierData = {
      ...formData,
      name: formData.name.trim(),
      address: formData.address.trim(),
      phone: formData.phone.trim(),
    };

    if (!supplierData.name || !supplierData.address || !supplierData.phone) {
      return;
    }

    if (editingSupplierId !== null) {
      setSuppliers((prev) =>
        prev.map((supplier) =>
          supplier.id === editingSupplierId
            ? { ...supplier, ...supplierData }
            : supplier
        )
      );
    } else {
      setSuppliers((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...supplierData,
        },
      ]);
    }

    resetForm();
  };

  // Edit Supplier
  const handleEdit = (supplier) => {
    setFormData({
      name: supplier.name,
      address: supplier.address,
      phone: supplier.phone,
    });

    setEditingSupplierId(supplier.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete Supplier
  const handleDelete = (id) => {
    const confirmed = window.confirm("هل أنت متأكد من حذف هذا المورد؟");

    if (!confirmed) return;

    setSuppliers((prev) => prev.filter((supplier) => supplier.id !== id));

    if (editingSupplierId === id) {
      resetForm();
    }
  };

  return (
    <div className="suppliers-page">
      <div className="page-header">
        <div>
          <h1>الموردين</h1>
          <p>إدارة بيانات الموردين وإضافة موردين جدد</p>
        </div>
      </div>

      <SupplierForm
        formData={formData}
        editingSupplierId={editingSupplierId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={resetForm}
      />

      <SuppliersTable
        suppliers={suppliers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Suppliers;
