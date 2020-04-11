import React from "react";

const OrderItem = ({ item }) => {
  return (
    <div className="text-lg lead flex justify-between">
      <div className="ml-5">{`${item[0]}`}</div>{" "}
      <div className="mr-10">{`$${item[1]}`}</div>
    </div>
  );
};

export default OrderItem;
