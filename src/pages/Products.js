import { ListProducts } from '../components/ListProducts'
import styles from '../styled/ListProducts.module.scss'
export function Products() {
  return (
    <section className={styles.layoutProducts}>
      <h1 className={styles.titlePage}>Catalogo De Productos</h1>
      <ListProducts />
    </section>
  )
}
