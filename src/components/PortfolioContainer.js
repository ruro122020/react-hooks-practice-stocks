import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStock, setPortfolioStock}) {

const handleRemoveStock =(removeStock)=>{
  const newStocks = portfolioStock.filter(stock=> stock.id !== removeStock.id)
  setPortfolioStock(newStocks)
}
const displayStocks = portfolioStock.map(stock => <Stock key={stock.id} stock={stock} onStockInPortfolio={handleRemoveStock}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        displayStocks
      }
    </div>
  );
}

export default PortfolioContainer;
