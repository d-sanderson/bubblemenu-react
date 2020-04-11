import React from "react";
import Table from "./Table";
const TableDisplay = ({ tables, selectTable}) => {
  const tablesList = tables.map((table) => (
    <Table table={table} selectTable={selectTable}/>
  ));
  return (
    <>
      <div className="h-40 px-4 w-1/2 border-2 border-black bg-indigo-300">
      <h1 className="m-2 font-bold">Select a table</h1>
        {tablesList}
      </div>
      ;
    </>
  );
};

export default TableDisplay;
