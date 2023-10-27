import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  const displayStocks = stocks.map(stock => <Stock key={stock.id} name={stock.name} price={stock.price}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {displayStocks}
    </div>
  );
}

export default StockContainer;
