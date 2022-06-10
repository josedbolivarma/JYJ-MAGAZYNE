import styles from './Cart.module.scss';

import {
  GrayLightTypographyStyled,
  DarkTypographyStyled,
  ButtonPrincipal
} from '../../styled/styledcomponents';
import Subtotal from '../../components/Subtotal/Subtotal';
import { useSelector } from 'react-redux';
import CartProducts from '../../components/CartProducts/CartProducts';

const Cart = () => {
  const { cart } = useSelector((store) => store.cart);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__container}>
        <div className={styles.cart__containerTitle}>
          <h2 className={styles.cart__title}><i>CARRITO DE COMPRA</i></h2>
          {/* <ShoppingCartIcon /> */}
          ICON
        </div>
        <div className={styles.cart__container}>
          <div className={styles.cart__containerLabels}>

          </div>

          {cart.map((item, index) => (
            <CartProducts
              key={index}
              id={item.codigo}
              nombre={item.nombre}
              image={item.image__front}
              precio={item.precio}
            />
          ))}
        </div>
        <div className={styles.cart__containerTitle}>
          {/* <GrayTitleStyled1>Subtotal: {formatoCOP.format(getCartTotal(cart))} </GrayTitleStyled1> */}
          <GrayLightTypographyStyled>
            Los códigos de descuento, los costes de envío y los impuestos se
            añaden durante el pago.
          </GrayLightTypographyStyled>
        </div>
        <div className={styles.form__orderFlex}>
          <div className={styles.cart__containerForm}>
            <DarkTypographyStyled>
              Indicaciones para el vendedor
            </DarkTypographyStyled>
            <form className={styles.cart__form}>
              <textarea
                className={styles.cart__formTextarea}
                name="support"
              ></textarea>
              <div className={styles.cart__formContainerCheckbox}>
                <input type="checkbox" name="supportCheck" />
                <label>Estoy de acuerdo con los términos y condiciones.</label>
              </div>
              <ButtonPrincipal>Finalizar Pedido</ButtonPrincipal>
            </form>
          </div>
          <div className={styles.cart__order}>
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart