import React from "react";
import MenuItem from "./MenuItem";

const MenuContainer = ({ category, menuItems, trackClicked }) => {
  //TODO: Filter items by # of clicks
  const items = menuItems.map((item) => (
    <MenuItem trackClicked={trackClicked} price={item.price} name={item.name} />
  ));
  return (
    <>
      <h1 className="text-2xl my-5 text-blue-800 font-semibold">{category}</h1>
      <div className="flex flex-wrap">{items}</div>
    </>
  );
};

export default MenuContainer;
