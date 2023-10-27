/*
1. Render all the stocks onto the page. The styling of how a Stock should look like is already in the Stock component.

2. Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.

3. Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.

4. Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.

5. Allow a user to filter stocks based on the type of the stock.
*/

import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data))
  }, [])
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
