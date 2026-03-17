import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Team from "./pages/Team";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import Blogs from "./pages/Blogs"
import Inquiries from "./pages/Inquiries";
import {Navigate} from "react-router-dom";
import Dashboard from "./pages/dashboard";

function App() {
  
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Team />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Blogs />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/inquiries"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Inquiries />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;