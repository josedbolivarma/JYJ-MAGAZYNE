import { useListProducts } from '../hooks/useListProducts'
import Card from './Card'
import styles from '../styled/ListProducts.module.scss'

export function ListProducts() {
  const { products } = useListProducts()

  return (
    <section className={styles.listiProducts}>
      {products.map(product => (
        <Card product={product} />
      ))}
    </section>
  )
}
