import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactImageMagnify from "react-image-magnify";
import styles from './Details.module.scss';
import { ButtonPrincipal, GrayLightTypographyStyled } from "../../styled/styledcomponents";
import { formatoCOP } from "../../utils/Moneda";
import { addSyncToCart } from "../../redux/actions/actionShoppingCart";

const initialState = {
  nombre: "Producto De Ejemplo",
  codigo: "normal",
  precio: 20000,
  image__front: "https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg",
  image__lateral:
    "https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg",
  image__back: "https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg",
};

const Details = ({ product = initialState }) => {
  const { modal } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!modal.image__front) {
      setImage("https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg");
    } else {
      setImage(modal.image__front);
    }
  }, [modal]);

  const addToCart = (productCart) => {
    dispatch(addSyncToCart(productCart));
  };

  return (
    <div className={styles.details}>
      <div className={styles.details__options}>
        <img
          onMouseEnter={() => setImage(product.image__front)}
          className={
            product.image__front
              ? styles.details__optionImage
              : styles.displayNone
          }
          src={
            product.image__front ? product.image__front : product.image__front
          }
          alt="front"
        />
        <img
          onMouseEnter={() => setImage(product.image__lateral)}
          className={
            product.image__lateral
              ? styles.details__optionImage
              : styles.displayNone
          }
          src={
            product.image__lateral
              ? product.image__lateral
              : product.image__front
          }
          alt="lateral"
        />
        <img
          onMouseEnter={() => setImage(product.image__back)}
          className={
            product.image__back
              ? styles.details__optionImage
              : styles.displayNone
          }
          src={product.image_back ? product.image__back : product.image__front}
          alt="back"
        />
      </div>
      {/* Card Detail */}
      <div className={styles.details__detail2}>
        <div className={styles.details__detail}>
          <ReactImageMagnify
            className={styles.details__detailImage}
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 800,
                height: 1200,
                borderRadius: "50px",
              },
            }}
          />
        </div>
      </div>
      {/* Card Detail */}

      {/* Card Info */}

      <div className={styles.card__info}>
        <div>
          <h2 className={styles.card__title}>
            {modal.nombre}
          </h2>
        </div>
        <GrayLightTypographyStyled
          variant="body2"
          component="h2"
          className={styles.flexText}
        >
          <p>
            <b>Envio Gratis.</b>
          </p>
          <h2 className={styles.clickInfoDetails}>Detalles</h2>
        </GrayLightTypographyStyled>
        <div className={styles.details__boxInfo}>
          <h2 className={styles.details__price}>Precio</h2>
          <h2 className={styles.details__price}>
            {formatoCOP.format(modal.precio)}
          </h2>
        </div>
        {/*  */}
        <div className={styles.details__containerInfoFlex}>
          <div className={styles.details__boxInfoFlex}>
            <h2 className={styles.details__infoLabel}>
              Categoría
            </h2>
            <h2 className={styles.details__infoText}>
              {modal.categoria}
            </h2>
          </div>
          <div className={styles.details__boxInfoFlex}>
            <h2 className={styles.details__infoLabel}>
              Sabor
            </h2>
            <h2 className={styles.details__infoText}>
              {modal.sabor}
            </h2>
          </div>
          <div className={styles.details__boxInfoFlex}>
            <h2 className={styles.details__infoLabel}>
              Contenido
            </h2>
            <h2 className={styles.details__infoText}>
              {modal.gramos}
            </h2>
          </div>
        </div>
        {/*  */}
        <div className={styles.details__payment}>
          <ButtonPrincipal onClick={() => addToCart(modal)}>
            {/* Agregar al Carrito <ShoppingCart /> */}
            Agregar al Carrito
          </ButtonPrincipal>
        </div>
      </div>
      {/* Card Info */}
    </div>
  );
};

export default Details;