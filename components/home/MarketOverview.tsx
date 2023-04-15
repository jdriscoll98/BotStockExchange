"use client";

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const sampleMarketData = [
  { symbol: "AAPL", price: 150.74, change: 1.24, percentage: 0.83 },
  { symbol: "GOOGL", price: 2704.42, change: 12.51, percentage: 0.46 },
  { symbol: "TSLA", price: 700.12, change: -15.3, percentage: -2.14 },
];

const MarketOverview = () => {
  const [marketData, setMarketData] = useState(sampleMarketData);

  useEffect(() => {
    // Fetch market data from a financial API
  }, []);

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-neonGreen text-3xl font-bold mb-4">
          Market Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketData.map((asset) => (
            <div key={asset.symbol} className="bg-primary p-4 rounded shadow">
              <h3 className="text-neonGreen text-xl font-bold mb-2">
                {asset.symbol}
              </h3>
              <div className="text-primary font-bold text-lg mb-2">
                ${asset.price.toFixed(2)}
              </div>
              <div
                className={`${
                  asset.change >= 0 ? "text-neonGreen" : "text-neonRed"
                } font-bold`}
              >
                {asset.change.toFixed(2)} ({asset.percentage.toFixed(2)}%)
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
