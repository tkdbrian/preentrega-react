import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        const item = data.find((element) => String(element.id) === id)

        if (item) {
          setItemDetail(item)
          return
        }

        throw new Error('Producto no encontrado')
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
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
