import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="detail-container">
      <Item {...item}>
        <button className="btn bg-primary primary" onClick={() => addItem(item)}>
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};
