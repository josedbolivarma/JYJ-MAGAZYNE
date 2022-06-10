import { FilterProducts } from '../components/FilterProducts'
import { ListProducts } from '../components/ListProducts'

export function Products() {
  return (
    <section>
      <FilterProducts />
      <div className=''>lista de productos</div>
      <ListProducts />
    </section>
  )
}
