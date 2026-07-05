import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getByCategory } from '../../services/productsService'

function ItemListContainer() {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar productos:', error))
      .finally(() => setLoading(false))
  }, [category])

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
