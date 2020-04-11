import React, { useState } from "react";
import MenuSection from "./MenuSection";
import TotalDisplay from "./TotalDisplay";
import {appetizers, flatbreads, sandwiches, grain_bowls, desserts } from "../menuData"

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
        menuItems={appetizers}
      />
      <MenuSection
        addItem={addItem}
        category="Flatbreads"
        menuItems={flatbreads}
      />
      <MenuSection
        addItem={addItem}
        category="Sandwiches"
        menuItems={sandwiches}
      />
      <MenuSection
        addItem={addItem}
        category="Grain Bowls"
        menuItems={grain_bowls}
      />
      <MenuSection
        addItem={addItem}
        category="Desserts"
        menuItems={desserts}
      />
    </div>
  );
};

export default MenuContainer;
