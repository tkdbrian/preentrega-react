import Item from '../Item/Item'
import './ItemDetail.css'

function ItemDetail({ item }) {
  return (
    <div className="detail-container">
      <Item {...item}>
        <button>Agregar al carrito</button>
      </Item>
    </div>
  )
}

export default ItemDetail
