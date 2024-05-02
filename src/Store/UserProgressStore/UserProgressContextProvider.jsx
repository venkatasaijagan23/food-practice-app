import { useState } from "react";
import UserProgressContext from "./UserProgressContext";

const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("Cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("Checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const userProgressContext = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContextProvider;
