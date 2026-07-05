import { useCart } from "../../context/CartContext";
import "./CartView.css";

export const CartItem = ({ item }) => {
  const { addItem, decreaseItem, removeItem } = useCart();

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>${item.price} c/u</p>
        <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => decreaseItem(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addItem(item)}>+</button>
      </div>
      <button className="cart-item-remove" onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </article>
  );
};
