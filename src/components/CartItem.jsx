import { useContext } from "react";
import { currencyFormatter } from "../util/CurrencyFormatter";

const CartItem = ({ id, name, quantity, price, onDecrease, onIncrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <button>{quantity}</button>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
