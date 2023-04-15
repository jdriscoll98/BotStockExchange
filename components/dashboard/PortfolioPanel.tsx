import React from "react";

const PortfolioPanel = () => {
  const portfolio = [
    // Example data - replace with actual portfolio data
    { symbol: "AAPL", quantity: 10, currentValue: 1500 },
    { symbol: "GOOGL", quantity: 5, currentValue: 6500 },
    { symbol: "TSLA", quantity: 8, currentValue: 6400 },
  ];

  return (
    <div className="bg-secondary rounded-lg p-6 shadow-md">
      <ul className="space-y-2">
        {portfolio.map((item, index) => (
          <li key={index} className="bg-primary rounded-lg p-4">
            <div className="flex flex-col justify-between items-start">
              <span className="text-xl font-bold">{item.symbol}</span>
              <div>
                <span className="text-primary font-semibold mr-2">
                  Quantity:
                </span>
                <span className="text-primary">{item.quantity}</span>
              </div>
              <div>
                <span className="text-primary font-semibold mr-2">Value:</span>
                <span className="text-primary">
                  ${item.currentValue.toFixed(2)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPanel;
