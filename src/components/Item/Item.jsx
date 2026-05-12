import './Item.css'

function Item({ name, description, price, image, stock, children }) {
  return (
    <article className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price.toLocaleString('es-AR')}</p>
        <p className="card-stock">Stock: {stock}</p>
        {children}
      </div>
    </article>
  )
}

export default Item
