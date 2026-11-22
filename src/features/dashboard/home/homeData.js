export const statsData = [
  {
    id: 1,
    title: "إجمالي الأصناف",
    value: "120",
    description: "صنف مسجل بالنظام",
    icon: "categories",
  },
  {
    id: 2,
    title: "الموردين",
    value: "18",
    description: "مورد مسجل",
    icon: "suppliers",
  },
  {
    id: 3,
    title: "فواتير الشراء",
    value: "56",
    description: "فاتورة مسجلة",
    icon: "invoices",
  },
  {
    id: 4,
    title: "الطاولات",
    value: "12",
    description: "طاولة مضافة",
    icon: "tables",
  },
];

export const quickActions = [
  {
    id: 1,
    title: "إضافة صنف جديد",
    description: "إضافة صنف إلى قائمة الأصناف",
    path: "/dashboardLayout/categories",
    icon: "categories",
  },
  {
    id: 2,
    title: "فاتورة شراء جديدة",
    description: "تسجيل فاتورة شراء جديدة",
    path: "/dashboardLayout/purchaseInvoices",
    icon: "invoices",
  },
  {
    id: 3,
    title: "إضافة مورد",
    description: "إضافة مورد جديد للنظام",
    path: "/dashboardLayout/suppliers",
    icon: "suppliers",
  },
];

export const recentInvoices = [
  {
    id: 1,
    invoiceNumber: "INV-1001",
    supplier: "شركة النور للتوريدات",
    date: "2026-11-22",
    total: 12500,
  },
  {
    id: 2,
    invoiceNumber: "INV-1002",
    supplier: "مؤسسة الأمل",
    date: "2026-11-21",
    total: 8300,
  },
  {
    id: 3,
    invoiceNumber: "INV-1003",
    supplier: "مورد الخامات الأول",
    date: "2026-11-20",
    total: 15700,
  },
  {
    id: 4,
    invoiceNumber: "INV-1004",
    supplier: "شركة النور للتوريدات",
    date: "2026-11-19",
    total: 6200,
  },
];
