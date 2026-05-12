import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './ItemList.css'

function ItemList({ products }) {
  if (!products.length) {
    return <p>No hay productos disponibles.</p>
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="product-link"
        >
          <Item {...product} />
        </Link>
      ))}
    </div>
  )
}

export default ItemList
