import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./features/auth/login/Login";
// import ProtectedRoute from "./components/routing/ProtectedRoute";

import DashboardLayout from "./features/dashboard/dashboardLayout/DashboardLayout";
import Categories from "./features/dashboard/categories/Categories";
import Users from "./features/dashboard/users/Users";
import PurchaseInvoices from "./features/dashboard/purchaseInvoices/PurchaseInvoices";
import Suppliers from "./features/dashboard/suppliers/Suppliers";
import Tables from "./features/dashboard/tables/Tables";
import Reports from "./features/dashboard/reports/Reports";
import Home from "./features/dashboard/home/Home";
import Presentation from "./features/presentation/Presentation";

// import Error from "./components/Error";

const router = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <Presentation />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboardLayout",
    element: (
      // <ProtectedRoute>
      <DashboardLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "purchaseInvoices",
        element: <PurchaseInvoices />,
      },
      {
        path: "suppliers",
        element: <Suppliers />,
      },
      {
        path: "tables",
        element: <Tables />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },

  // 404 Route
  // {
  //   path: "*",
  //   element: <Error code="404" message="Page not found" redirectPath="/" />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
