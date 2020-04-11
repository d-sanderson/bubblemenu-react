import React from "react";

const TotalDisplay = ({ items }) => {
  let orderItems = items.map((el, i) => (
    <div key={i} className="text-lg lead flex justify-between">
      <div className="ml-5">{`${el[0]}`}</div>{" "}
      <div className="mr-10 font-bold">{`$${el[1]}`}</div>
    </div>
  ));
  return (
    <div className="mx-auto h-32 border-2 border-black bg-indigo-300 overflow-y-scroll">
      {orderItems}
    </div>
  );
};

export default TotalDisplay;
