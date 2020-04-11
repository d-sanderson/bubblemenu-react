import React from "react";
import OrderItem from "./OrderItem";

const TotalDisplay = ({ items }) => {
  let orderItems = items.map((item, i) => <OrderItem key={i} item={item}/>);
  let total = items.reduce((acc, cv) => acc + cv[1], 0)
  const calcTaxes = (total, taxRate) => ((total * taxRate) + total).toFixed(2);
  return (
    <div className="mx-auto h-32 border-2 border-black bg-indigo-300 overflow-y-scroll">
      {orderItems}
      <div className="text-right text-lg lead mr-10 font-bold">Total: ${calcTaxes(total, .07875)}</div>
    </div>
  );
};

export default TotalDisplay;
