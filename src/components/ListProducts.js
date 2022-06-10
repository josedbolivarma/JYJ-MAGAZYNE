import { useListProducts } from '../hooks/useListProducts'
import Card from './Card'
import styles from '../styled/ListProducts.module.scss'

export function ListProducts() {
  const { products } = useListProducts()
  console.log('🚀 ~ file: ListProducts.js ~ line 7 ~ ListProducts ~ products', products)

  return (
    <section className={styles.listiProducts}>
      {products.map(product => (
        <Card product={product} />
      ))}
    </section>
  )
}
