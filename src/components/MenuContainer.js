import React, { useState } from "react";
import MenuSection from "./MenuSection";
import TotalDisplay from "./TotalDisplay";
import menu from "../menuData"
const MenuContainer = () => {

  const [items, setItems] = useState([]);
  const addItem = (name, price) => {
    setItems([...items, [name, price]]);
  };
  return (
    <div className="container">
      <h1 className="text-5xl py-8">Sixty Six Acres Menu</h1>
      <TotalDisplay items={items}/>
      <MenuSection
        addItem={addItem}
        category="Appetizers"
        menuItems={menu.appetizers}
      />
      <MenuSection
        addItem={addItem}
        category="Flatbreads"
        menuItems={menu.flatbreads}
      />
      <MenuSection
        addItem={addItem}
        category="Sandwiches"
        menuItems={menu.sandwiches}
      />
      <MenuSection
        addItem={addItem}
        category="Grain Bowls"
        menuItems={menu.grain_bowls}
      />
      <MenuSection
        addItem={addItem}
        category="Desserts"
        menuItems={menu.desserts}
      />
    </div>
  );
};

export default MenuContainer;
