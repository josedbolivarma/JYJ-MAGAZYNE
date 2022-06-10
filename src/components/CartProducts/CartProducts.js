import { useDispatch } from "react-redux";
import { deleteSyncFromCart } from "../../redux/actions/actionShoppingCart";
import { ButtonPrincipal, MarkPrice1 } from "../../styled/styledcomponents";

import { formatoCOP } from "../../utils/Moneda";
import styles from './CartProducts.module.scss';

const CartProducts = ({ id, image, nombre, precio }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(deleteSyncFromCart(id));
  };

  return (
    <div className={styles.checkoutProduct}>
      <img
        className={styles.checkoutProduct__image}
        src={image}
        alt="Checkout Product"
      />

      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>{nombre}</p>
        <p className={styles.checkoutProduct__price}>
          <MarkPrice1>{formatoCOP.format(precio)}</MarkPrice1>
        </p>
        <div>
        <ButtonPrincipal onClick={removeFromCart}>Remove</ButtonPrincipal>

        </div>
      </div>
    </div>
  );
};

export default CartProducts;