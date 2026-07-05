import { Link } from "react-router-dom";

export const ProductSuccess = () => {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#f0f0f0" }}>
      <h2>¡Producto cargado con éxito! 🎉</h2>
      <p>El producto fue guardado correctamente en la tienda.</p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
        <Link
          to="/admin/products/new"
          style={{ padding: "0.75rem 1.5rem", background: "#5aa3ff", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}
        >
          Cargar otro producto
        </Link>
        <Link
          to="/admin/dashboard"
          style={{ padding: "0.75rem 1.5rem", background: "#444", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}
        >
          Volver al panel
        </Link>
      </div>
    </div>
  );
};
