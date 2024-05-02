import { useContext } from "react";
import Button from "../UI/Button";
import { currencyFormatter } from "../util/CurrencyFormatter";
import CartContext from "../Store/CartStore/CartContext";

const MealItem = ({ id, name, price, description, image }) => {
  const cartCtx = useContext(CartContext);
  function handleAddToCart() {
    const mealItem = {
      id,
      name,
      price,
      description,
      image,
    };
    cartCtx.addItem(mealItem);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
