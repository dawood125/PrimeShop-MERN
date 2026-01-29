import { Route, Routes } from "react-router-dom";
import AuthLayout from "./Components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./Components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout></AuthLayout>}>
          <Route path="login" element={<AuthLogin></AuthLogin>}></Route>
          <Route path="register" element={<AuthRegister></AuthRegister>}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
          <Route path="dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="features" element={<AdminFeatures></AdminFeatures>}></Route>
          <Route path="orders" element={<AdminOrders></AdminOrders>}></Route>
          <Route path="products" element={<AdminProducts></AdminProducts>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
