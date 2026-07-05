export const validateProduct = ({ name, price, category, description, image }) => {
  const errors = {};

  if (!name || name.trim() === "") {
    errors.name = "El nombre es obligatorio";
  }

  if (!price || isNaN(price) || Number(price) <= 0) {
    errors.price = "El precio debe ser un número mayor a 0";
  }

  if (!category || category.trim() === "") {
    errors.category = "La categoría es obligatoria";
  }

  if (!description || description.trim() === "") {
    errors.description = "La descripción es obligatoria";
  }

  if (!image || image.trim() === "") {
    errors.image = "La URL de imagen es obligatoria";
  }

  return errors;
};
