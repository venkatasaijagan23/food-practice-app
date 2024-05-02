import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartContextProvider = ({ children }) => {
  const defaultStateObj = {
    items: [],
  };
  const [cart, dispatchCartAction] = useReducer(CartReducer, defaultStateObj);

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id,
    });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log("cart context obj ===>", cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
