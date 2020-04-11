import React from "react";

const TotalDisplay = ({ items }) => {
    console.log(items)
    let orderItems = items.map(el => <div>{`${el[0]},  ${el[1]}`}</div>)
  return (
    <div className="mx-auto w-5/6 h-32 border-2 border-black bg-indigo-300 overflow-y-scroll">{orderItems}</div>
  );
};

export default TotalDisplay;
