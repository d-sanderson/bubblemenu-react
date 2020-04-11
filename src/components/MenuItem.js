import React, { useState } from "react";

const MenuItem = ({ name, price }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks)
  };
  return (
    <button class=" m-2 w-32 h-32 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded" data-price={price} data-clicks={clicks} onClick={handleClick}>
      {name}
    </button>
  );
};

export default MenuItem;
