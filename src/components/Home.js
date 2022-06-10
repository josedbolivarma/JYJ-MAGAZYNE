import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionProducts'
import styles from "../styled/Home.module.scss";
import Card from './Card';
import Filter from './Filter';

const Home = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(listAsync());
  }, [dispatch])

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <div className={styles.home_container}>
      <div className={styles.home_filters}>
        <Filter product={products} setData={setData} data={data} />
      </div>
      <div className={styles.home_container__card}>
        {
          data.length > 0
            ? data.map(product => (
              <div key={product.nombre}>
                <Card product={product} />
              </div>
            ))
            : <div>No hay productos</div>
        }
      </div>
    </div>
  )
}

export default Home