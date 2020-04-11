import React, { useState } from "react";
import MenuSection from "./MenuSection";
import TotalDisplay from "./TotalDisplay";
const MenuContainer = () => {
  const apps = [
    { name: "Brussells", price: 8 },
    { name: "Harissa Dip", price: 11 },
    { name: "Hummus Trio", price: 12 },
    { name: "Zuchini Ribbons", price: 8 },
    { name: "Calamari", price: 12 },
    { name: "Baked Brie", price: 12 },
    { name: "Really Good Fries", price: 7 },
    { name: "Blistered Shishitos", price: 11 },
  ];
  const flatbreads = [
    { name: "Margharita", price: 11 },
    { name: "Curried Cauliflower", price: 12 },
    { name: "Pork Belly and Blue Cheese", price: 14 },
    { name: "Steaks and Ports", price: 15 },
  ];
  const grain_bowls = [
    { name: "Korean Fried Chicken", price: 16 },
    { name: "Salmon and Himalayan Rice", price: 18 },
    { name: "Harissa Portobella", price: 14 },
    { name: "New Mexico Shrimp & Grits", price: 18 },
    { name: "Steak Frites", price: 21 },
  ];
  const sandwiches = [
    { name: "Chimichurri Chicken", price: 11 },
    { name: "Patty Melt", price: 12 },
    { name: "Grilled Mozzarella & Portabella", price: 9 },
    { name: "Sixty-Six Green Chile Cheeseburger", price: 14 },
    { name: "Crispy Pork Belly Bahn Mi", price: 14 },
    { name: "Pastrami Rueben", price: 13 },
  ];
  const desserts = [
    { name: "Chocolate Pudding", price: 6 },
    { name: "Bananna ShortBread", price: 7 },
    { name: "Green Chile Apple Empanada", price: 8 },
  ];
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
        menuItems={apps}
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
