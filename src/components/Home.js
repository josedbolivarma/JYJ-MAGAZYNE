import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionProducts'
import styles from "../styled/Home.module.scss";
import Card from './Card';

const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(listAsync());
  }, [])

  console.log(products);

  return (
    <div className={styles.home_container}>
      {
        products.map(product => (
          <div key={product.nombre}>
            <Card product={product} />
          </div>
        ))
      }
    </div>
  )
}

export default Home