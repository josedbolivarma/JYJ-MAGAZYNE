import React, { useEffect, useState } from "react";
import {
  DarkTypographyStyled,
  GrayTitleStyled,
  MarkPrice,
} from "../../styled/styledcomponents";

//Material UI
// import DetailsContainer from "../containers/DetailsContainer";
// import Gallery from "../components/Gallery";
// import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import Details from "../../components/Details/Details";
import styles from './DetailPage.module.scss';

const DetailPage = () => {

  const { modal } = useSelector((store) => store.modal);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (modal) {
      setProduct(modal);
    }
  }, [modal]);

  return (
    <div id="hola" className={styles.detail}>
      {/* <img className={sh2les.detail__banner} src='./principals-home/principal-2.jpg'/> */}
      <Details product={product} />
      <div className={styles.detail__container}>
        <div className={styles.detail__boxTitle}>
          <h2 className={styles.detail__title}>
            <i>DETALLES</i>
          </h2>
          <h2>{product.detalles}</h2>
        </div>
        <div
          className={styles.detail__boxTitle}
          style={{
            borderTop: "3px solid #5C5C5C",
            borderBottom: "3px solid #5C5C5C",
          }}
        >
          <h2 className={styles.detail__title}>
            <i>INGREDIENTES</i>
          </h2>
          <h2>{product.ingredientes}</h2>
        </div>
        <div className={styles.detail__boxTitle}>
          <h2 className={styles.detail__title}>
            <i>INSTRUCCIONES DE USO</i>
          </h2>
          <h2>{product.instrucciones}</h2>
        </div>
        <div className={styles.detail__boxWarning}>
          <MarkPrice>Warning</MarkPrice>
          <DarkTypographyStyled>{product.warnings}</DarkTypographyStyled>
        </div>
        <div className={styles.galleryContainer__title}>
          <GrayTitleStyled>OTROS PRODUCTOS</GrayTitleStyled>
          <DarkTypographyStyled>¡OBTEN RESULTADOS!</DarkTypographyStyled>
            <div className={styles.galleryContainer__gallery}>
              {/* <Fade right> */}
                {/* <Gallery categoria="Definición" /> */}
              {/* </Fade> */}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailPage;