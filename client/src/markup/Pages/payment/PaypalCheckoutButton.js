import React, { useState, useEffect } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../../actions";

const PaypalCheckoutButton = (props) => {
  const { product } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const item = useSelector(state => state.orderReducer.item);

  useEffect(() => {

  }, [item]);

  const handleSubmitCreate= () =>{
    let data = item;
    data.paymentMethod = "PAYPAL PAYMENT";
    data.status = "PAID";
    data.user = data.user.id;
    data.price = item.room.price;
    data.room = item.room._id;
    dispatch(orderActions.create(data));
  }

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };


  if (paidFor) {
    handleSubmitCreate()
    alert("Thank You");

  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, actions) => {
          const hasAlreadyBoughtCourse = false;
          if (hasAlreadyBoughtCourse) {
            setError("You Already bough this course");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (product.totalPrice / 23000)
                }
              }
            ]
          });
        }}
        onApprove={async (data, action) => {
          const order = await action.order.capture();
          handleApprove(data.orderID);
        }}
        onCancel={() => {
        }}
        onError={(err) => {
          setError(err);
          console.log("PayPal Checkout onError", err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckoutButton;