import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="loading">Cargando productos...</p>
  }

  return (
    <section className="list-container">
      <h1>Productos</h1>
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer
