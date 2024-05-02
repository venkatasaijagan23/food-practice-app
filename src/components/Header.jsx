import { useContext } from "react";
import Button from "../UI/Button";
import logoImg from "../assets/logo.jpg";
import CartContext from "../Store/CartStore/CartContext";
import UserProgressContext from "../Store/UserProgressStore/UserProgressContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);
  const itemsLength = cartCtx.items.reduce((acc, { quantity }) => {
    return acc + quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="food-logo" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCart}>
          Cart ({itemsLength})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
