import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, sortBy, stockType, onStockInPortfolio }) {

  const displayStocks = stocks
    .filter(stock => stockType === '' || stock.type.toLowerCase() === stockType.toLowerCase())
    .sort((stockOne, stockTwo) => {
      if (sortBy === 'Alphabetically') {
        const nameA = stockOne.name.toUpperCase(); 
        const nameB = stockTwo.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        
        return 0;
      } 
      if(sortBy === 'Price') {
        return stockOne.price - stockTwo.price
      }
    })
    .map(stock => <Stock key={stock.id} stock={stock} onStockInPortfolio={onStockInPortfolio} />)
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {displayStocks}
    </div>
  );
}

export default StockContainer;
