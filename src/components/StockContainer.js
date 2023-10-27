import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockInPortfolio}) {
  const displayStocks = stocks.map(stock => <Stock key={stock.id} stock={stock} onStockInPortfolio={onStockInPortfolio}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {displayStocks}
    </div>
  );
}

export default StockContainer;
