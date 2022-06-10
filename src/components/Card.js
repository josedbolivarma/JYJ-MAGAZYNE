import React from 'react'
import styles from '../styled/Card.module.scss'

const Card = ({ product }) => {
  return (
    <div className={styles.card_container}>
      {
        <div key={product.nombre} className={styles.card}>
          <img src={product.image__front} alt={product.nombre} />
          <div className={styles.card_text}>
            <h1>{product.nombre}</h1>
            <p>Sabor: <span>{product.sabor}</span></p>
            <p>Categoria: {product.categoria}</p>
            <h2>$ {product.precio}</h2>
          </div>
        </div>
      }
    </div>
  )
}

export default Card
