import { useState } from "react";

import TableForm from "./components/tablesForm/TablesForm";
import TablesList from "./components/tablesList/TablesList";

import "./tables.css";

const initialFormData = {
  name: "",
  number: "",
};

const Tables = () => {
  const [tables, setTables] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [editingTableId, setEditingTableId] = useState(null);

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
    setEditingTableId(null);
  };

  // Add / Update Table
  const handleSubmit = (e) => {
    e.preventDefault();

    const tableName = formData.name.trim();
    const tableNumber = Number(formData.number);

    if (!tableName || !Number.isInteger(tableNumber) || tableNumber <= 0) {
      return;
    }

    // Check Duplicate Table Number
    const isDuplicate = tables.some(
      (table) => table.number === tableNumber && table.id !== editingTableId
    );

    if (isDuplicate) {
      alert("رقم الطاولة مستخدم بالفعل");
      return;
    }

    const tableData = {
      name: tableName,
      number: tableNumber,
    };

    if (editingTableId !== null) {
      setTables((prev) =>
        prev.map((table) =>
          table.id === editingTableId ? { ...table, ...tableData } : table
        )
      );
    } else {
      setTables((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...tableData,
        },
      ]);
    }

    resetForm();
  };

  // Edit Table
  const handleEdit = (table) => {
    setFormData({
      name: table.name,
      number: String(table.number),
    });

    setEditingTableId(table.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete Table
  const handleDelete = (id) => {
    const confirmed = window.confirm("هل أنت متأكد من حذف هذه الطاولة؟");

    if (!confirmed) return;

    setTables((prev) => prev.filter((table) => table.id !== id));

    if (editingTableId === id) {
      resetForm();
    }
  };

  return (
    <div className="tables-page">
      <div className="page-header">
        <div>
          <h1>الطاولات</h1>
          <p>إدارة طاولات المطعم وإضافة طاولات جديدة</p>
        </div>
      </div>

      <TableForm
        formData={formData}
        editingTableId={editingTableId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onReset={resetForm}
      />

      <TablesList tables={tables} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Tables;
