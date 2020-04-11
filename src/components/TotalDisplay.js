import React from "react";
import OrderItem from "./OrderItem";

const TotalDisplay = ({ items, currentTable }) => {
  let orderItems = items.map((item, i) => <OrderItem key={i} item={item}/>);
  let total = items.reduce((acc, cv) => acc + cv[1], 0)
  const calcTaxes = (total, taxRate) => ((total * taxRate) + total).toFixed(2);
  return (
    <div className="h-40 w-1/2 border-2 border-black bg-indigo-300 overflow-y-scroll">
    <h1 className="mt-3 ml-5 text-2xl">Table#{currentTable}</h1>
      {orderItems}
      <div className="text-right text-lg lead mr-10 font-bold">Total: ${calcTaxes(total, .07875)}</div>
    </div>
  );
};

export default TotalDisplay;
