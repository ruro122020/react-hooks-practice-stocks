import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStock}) {
const displayStocks = portfolioStock.map(stock => <Stock key={stock.id} stock={stock}/>)
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
