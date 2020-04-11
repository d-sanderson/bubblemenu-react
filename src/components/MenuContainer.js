import React from "react";
import MenuItem from "./MenuItem";

const MenuContainer = ({ category, menuItems }) => {
  const items = menuItems.map((item) => <MenuItem price={item.price} name={item.name}/>);
  return (
      <>
      <h1 className="text-2xl bold my-5">{category}</h1>
      <div className="flex flex-wrap">
      {items}
      </div>
      </>
  );
};

export default MenuContainer;
