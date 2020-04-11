import React from "react";

const Table = ({ table, selectTable }) => {
  return (
    <button
      className="my-2 bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => {
        selectTable(table.num);
      }}
    >
      {table.num}
    </button>
  );
};

export default Table;
