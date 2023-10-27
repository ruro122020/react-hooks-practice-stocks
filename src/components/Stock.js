import React, {useState} from "react";

function Stock({stock, onStockInPortfolio}) {

  return (
    <div>
      <div className="card" onClick={()=>{onStockInPortfolio(stock)}}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
