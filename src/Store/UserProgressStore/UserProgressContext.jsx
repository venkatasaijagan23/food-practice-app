import { createContext } from "react";

const UserProgressContext = createContext({
  progress: "", // Cart, Checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default UserProgressContext;
