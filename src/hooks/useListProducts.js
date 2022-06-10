import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { listAsync } from '../redux/actions/actionProducts'

export function useListProducts() {
  const dispatch = useDispatch()
  const { products } = useSelector(({ products }) => products)

  useEffect(() => {
    dispatch(listAsync())
  }, [dispatch])

  return { products }
}
