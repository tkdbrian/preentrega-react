import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import "./Dashboard.css";

export const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Panel de administración</h1>
        <div className="dashboard-header-actions">
          <button className="btn-secondary" onClick={() => navigate("/")}>
            Volver a la tienda
          </button>
          <button className="btn-danger" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="dashboard-body">
        <h3>Acciones rápidas</h3>
        <div className="dashboard-quick-actions">
          <Link to="/admin/products/new" className="btn-action">+ Cargar</Link>
          <button className="btn-action btn-disabled">✏️ Modificar</button>
          <button className="btn-action btn-disabled">🗑️ Eliminar</button>
        </div>

        <div className="dashboard-help">
          <h4>Ayuda</h4>
          <p>Desde este panel podés gestionar los productos de la tienda.</p>
        </div>
      </div>
    </div>
  );
};
