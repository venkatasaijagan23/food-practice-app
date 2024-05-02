import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartStore/CartContext";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Button from "../UI/Button";
import UserProgressContext from "../Store/UserProgressStore/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const cartTotal = items.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );

  return (
    <Modal
      className="cart"
      open={progress === "Cart"}
      closeHandler={progress === "Cart" ? hideCart : null}
    >
      <h2>Your Modal</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        <Button onClick={showCheckout}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
