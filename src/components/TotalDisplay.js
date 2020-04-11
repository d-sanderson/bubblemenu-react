import React from "react";
import OrderItem from "./OrderItem";

const TotalDisplay = ({ items }) => {
  let orderItems = items.map((item, i) => <OrderItem key={i} item={item}/>);
  return (
    <div className="mx-auto h-32 border-2 border-black bg-indigo-300 overflow-y-scroll">
      {orderItems}
    </div>
  );
};

export default TotalDisplay;
