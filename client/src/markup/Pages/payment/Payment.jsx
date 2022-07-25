import React from "react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

function Payment() {
  const product = {
    des: "Room1",
    price: 29
  };
  return (
    <div>
      <h1>{product.des}</h1>
      <h3>{product.price}</h3>
      <PaypalCheckoutButton product={product} />
    </div>
  );
}

export default Payment;