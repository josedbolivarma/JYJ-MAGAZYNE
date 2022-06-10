import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../selectors/getCartTotal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './Subtotal.module.scss';

//Material UI
import { ButtonPrincipal } from "../../styled/styledcomponents";

const Subtotal = () => {

  const navigate = useNavigate();
  const { cart } = useSelector((store) => store.cart);

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              ({cart.length} elementos): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" />
              JYJ FIT
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Calculate total cart
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <ButtonPrincipal onClick={(e) => navigate("/payment")}>
        Vamos a pagar
      </ButtonPrincipal>
    </div>
  );
};

export default Subtotal;