import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionProducts'

const Card = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(listAsync());
  }, [])

  console.log(products);

  return (
    <div>
      {
        products.map(product => (
          <div key={product.nombre}>
            <h1>{product.nombre}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Card