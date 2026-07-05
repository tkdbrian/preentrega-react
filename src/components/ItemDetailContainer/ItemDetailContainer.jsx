import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../services/productsService'

function ItemDetailContainer() {
  const { id } = useParams()
  const [itemDetail, setItemDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(id)
      .then((data) => setItemDetail(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <p className="loading">Cargando producto...</p>
  }

  if (!itemDetail) {
    return <p className="not-found">Producto no encontrado.</p>
  }

  return (
    <section className="detail-section">
      <ItemDetail item={itemDetail} />
    </section>
  )
}

export default ItemDetailContainer
