import Item from '../Item/Item'
import { useCart } from '../../context/CartContext'
import './ItemDetail.css'

function ItemDetail({ item }) {
  const { addItem } = useCart()

  return (
    <div className="detail-container">
      <Item {...item}>
        <button onClick={() => addItem(item)}>Agregar al carrito</button>
      </Item>
    </div>
  )
}

export default ItemDetail
