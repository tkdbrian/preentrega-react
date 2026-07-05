import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();

  const total = getCartTotal();

  return (
    <div className="cart-footer">
      <p className="cart-total">TOTAL A PAGAR: ${total}</p>
      <button className="btn-checkout" onClick={checkout}>
        FINALIZAR COMPRA
      </button>
    </div>
  );
};
