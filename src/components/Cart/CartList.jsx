import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const { cart } = useCart();

  return (
    <div className="cart-list">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
