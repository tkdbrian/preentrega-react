import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVEEDOR                                 */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Evalua existencia: retorna un booleano
  const isInCart = (item) => {
    return cart.some((element) => element.id === item.id);
  };

  // Agregar al carrito (incrementa quantity si ya existe)
  const addItem = (item) => {
    if (isInCart(item)) {
      setCart(cart.map((element) =>
        element.id === item.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Decrementar quantity (elimina si llega a 0)
  const decreaseItem = (id) => {
    setCart(
      cart
        .map((element) =>
          element.id === id
            ? { ...element, quantity: element.quantity - 1 }
            : element
        )
        .filter((element) => element.quantity > 0)
    );
  };

  // Eliminar del carrito
  const removeItem = (id) => {
    const updatedCart = cart.filter((element) => element.id !== id);
    setCart(updatedCart);
  };

  // Vacia el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de items en carrito (suma quantities)
  const getTotalItems = () => {
    return cart.reduce((acc, element) => acc + element.quantity, 0);
  };

  // Total a pagar
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price * element.quantity, 0);
  };

  // Checkout
  const checkout = () => {
    alert("Su compra ha sido realizada 🎉");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    decreaseItem,
    removeItem,
    getTotalItems,
    getCartTotal,
    clearCart,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
