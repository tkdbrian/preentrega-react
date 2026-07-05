export const ProductFormUI = ({
  product,
  errors,
  loading,
  isEditing,
  onChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>{isEditing ? "Editar producto" : "Agregar nuevo producto"}</h2>

        <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={product.name} onChange={onChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Precio:</label>
          <input type="number" name="price" value={product.price} onChange={onChange} min="0" />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div>
          <label>Categoría:</label>
          <input type="text" name="category" value={product.category} onChange={onChange} />
          {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div>
          <label>Descripción:</label>
          <textarea name="description" value={product.description} onChange={onChange} />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div>
          <label>URL de imagen:</label>
          <input type="url" name="image" value={product.image} onChange={onChange} placeholder="https://i.ibb.co/..." />
          {errors.image && <p className="error">{errors.image}</p>}
          {product.image && (
            <img src={product.image} alt="preview" style={{ marginTop: "0.5rem", maxWidth: "120px", borderRadius: "6px" }} />
          )}
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : isEditing ? "Guardar cambios" : "Guardar"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </section>
  );
};
