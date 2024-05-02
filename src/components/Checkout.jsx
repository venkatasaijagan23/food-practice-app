import { useContext } from "react";
import Modal from "../UI/Modal";
import { currencyFormatter } from "../util/CurrencyFormatter";
import CartContext from "../Store/CartStore/CartContext";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../Store/UserProgressStore/UserProgressContext";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const totalPrice = items.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const customerData = Object.fromEntries(formData.entries());
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
        customer: customerData,
      }),
    })
      .then((response) => {})
      .catch((error) => console.log(error));
  }

  return (
    <Modal open={progress === "Checkout"} closeHandler={hideCheckout}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>

        <Input type="text" label="Full Name" id="name" />
        <Input type="email" label="Email" id="email" />
        <Input type="text" label="Street" id="street" />
        <div className="control-row">
          <Input type="text" label="Postal Code" id="postal-code" />
          <Input type="text" label="City" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" onClick={hideCheckout} textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};
export default Checkout;
