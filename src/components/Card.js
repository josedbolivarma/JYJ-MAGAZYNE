import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../styled/Card.module.scss'
import { selectedModal } from '../redux/actions/actionModal';

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const enviarDatosModal = (item) => {
    dispatch(selectedModal(item));
    navigate("/details");
  };

  return (
    <div className={styles.card_container}>
      {
        <div 
        onClick={() => enviarDatosModal(product)}
        key={product.nombre} 
        className={styles.card}>
          <img src={product.image__front} alt={product.nombre}  />
          <div className={styles.card_text}>
            <h1>{product.nombre}</h1>
            <p> Sabor: <span>{product.sabor}</span></p>
            <p> Categoria: <span>{product.categoria}</span></p>
            <h2>$ {product.precio}</h2>
          </div>
        </div>
      }
    </div>
  )
}

export default Card
