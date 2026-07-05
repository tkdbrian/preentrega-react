import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/Cart/CartView'
import { Login } from './components/Login/Login'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductSuccess'
import './App.css'

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/" element={<><Header /><main><ItemListContainer /></main><Footer /></>} />
      <Route path="/category/:category" element={<><Header /><main><ItemListContainer /></main><Footer /></>} />
      <Route path="/product/:id" element={<><Header /><main><ItemDetailContainer /></main><Footer /></>} />
      <Route path="/carrito" element={<><Header /><main><CartView /></main><Footer /></>} />

      {/* LOGIN ADMIN */}
      <Route path="/admin/login" element={<Login />} />

      {/* ADMIN PROTEGIDO */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
      </Route>
    </Routes>
  )
}

export default App
