import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../../services/productsService";
import "./ProductAdminList.css";

export const ProductAdminList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    setLoading(true);
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`¿Eliminar "${name}"?`)) return;
    await deleteProduct(id);
    fetchProducts();
  };

  if (loading) return <p className="admin-list-loading">Cargando productos...</p>;

  return (
    <div className="admin-list">
      <div className="admin-list-header">
        <h2>Gestión de productos</h2>
        <div className="admin-list-header-actions">
          <button onClick={() => navigate("/admin/dashboard")} className="btn-secondary">
            ← Volver
          </button>
          <Link to="/admin/products/new" className="btn-primary">
            + Nuevo producto
          </Link>
        </div>
      </div>

      {products.length === 0 ? (
        <p>No hay productos cargados.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} className="admin-table-img" />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td className="admin-table-actions">
                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="btn-edit"
                  >
                    ✏️ Editar
                  </Link>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(product.id, product.name)}
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
