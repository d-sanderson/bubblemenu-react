import React from "react";

const OrderItem = ({ el }) => {
  return (
    <div className="text-lg lead flex justify-between">
      <div className="ml-5">{`${el[0]}`}</div>{" "}
      <div className="mr-10 font-bold">{`$${el[1]}`}</div>
    </div>
  );
};

export default OrderItem;
