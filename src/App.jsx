import { Navigate, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/Cart/CartView'
import { Login } from './components/Login/Login'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { PublicLayout } from './layouts/PublicLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSuccess } from './components/adminComponents/ProductSuccess'
import { ProductAdminList } from './components/adminComponents/ProductAdminList'
import './App.css'

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<CartView />} />
      </Route>

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
          <Route path="products" element={<ProductAdminList />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/edit/:id" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
      </Route>
    </Routes>
  )
}

export default App
