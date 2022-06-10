import React from 'react'
import styles from '../styled/Card.module.scss'

const Card = ({ product }) => {
  return (
    <div className={styles.card_container}>
      {
        <div key={product.nombre} className={styles.card}>
          <img src={product.image__front} alt={product.nombre} />
          <h1>{product.nombre}</h1>
          <p>
            Sabor: <span>{product.sabor}</span>
          </p>
          <h2>$ {product.precio}</h2>
        </div>
      }
    </div>
  )
}

export default Card
