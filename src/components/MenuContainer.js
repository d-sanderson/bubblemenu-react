import React, { useState, useEffect } from "react";
import MenuSection from "./MenuSection";
import TotalDisplay from "./TotalDisplay";
import TableDisplay from "./TableDisplay";
import {
  appetizers,
  flatbreads,
  sandwiches,
  grain_bowls,
  desserts,
  tables,
} from "../menuData";

const MenuContainer = () => {
  const [currentTable, setCurrentTable] = useState(null);

  const [items, setItems] = useState([]);
  const selectTable = (tableNum) => {
    setCurrentTable(tableNum);
  };
  const addItem = (name, price) => {
    setItems([...items, [name, price]]);
    console.log(items);
  };
  return (
    <div className="container">
      <h1 className="text-5xl py-8">Sixty Six Acres Menu</h1>
      <div className="flex">
        <TableDisplay selectTable={selectTable} tables={tables} />
        {currentTable && <TotalDisplay currentTable={currentTable} items={items} />}
      </div>
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
      <MenuSection addItem={addItem} category="Desserts" menuItems={desserts} />
    </div>
  );
};

export default MenuContainer;
