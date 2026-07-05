import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { createProduct, getProductById, updateProduct } from "../../services/productsService";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  // Si estamos editando, precargamos el producto
  useEffect(() => {
    if (!isEditing) return;
    getProductById(id).then((data) => {
      if (data) {
        setProduct({
          name: data.name,
          price: String(data.price),
          category: data.category,
          description: data.description,
          image: data.image,
        });
      }
    });
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct(product);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const productData = {
        ...product,
        price: Number(product.price),
        stock: 10,
      };

      if (isEditing) {
        await updateProduct(id, productData);
        navigate("/admin/products", { replace: true });
      } else {
        const newId = await createProduct(productData);
        setProduct({ name: "", price: "", category: "", description: "", image: "" });
        navigate(`/admin/products/success/${newId}`, { replace: true });
      }
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      isEditing={isEditing}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
