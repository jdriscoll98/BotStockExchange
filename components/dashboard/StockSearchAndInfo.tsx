"use client";

import React, { useState } from "react";

const StockSearchAndInfo = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockInfo, setStockInfo] = useState<any>(null);
  const [stockNews, setStockNews] = useState<any>(null);

  const handleSearch = async () => {
    // Fetch stock info and news using the stockSymbol, then update the state
    // e.g., setStockInfo(response.stockInfo), setStockNews(response.stockNews)
    //   display some dummy data for now
    setStockInfo({
      symbol: "AAPL",
      price: 150.74,
      change: 1.24,
      percentage: 0.83,
    });
    setStockNews([
      {
        title: "Apple stock hits all-time high",
        url: "https://www.google.com",
        source: "Google News",
      },
      {
        title: "Apple stock hits all-time high",
        url: "https://www.google.com",
        source: "Google News",
      },
      {
        title: "Apple stock hits all-time high",
        url: "https://www.google.com",
        source: "Google News",
      },
    ]);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search stock symbol"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
          className="bg-secondary text-primary rounded-l px-4 py-2 outline-none w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-highlight text-primary font-bold px-4 py-2 rounded-r"
        >
          Search
        </button>
      </div>
      {stockInfo && (
        <div>
          <h3 className="text-2xl font-bold mb-2">Stock Information</h3>
          <div className="bg-primary p-4 rounded shadow">
            <h3 className="text-neonGreen text-xl font-bold mb-2">
              {stockInfo.symbol}
            </h3>
            <div className="text-primary font-bold text-lg mb-2">
              ${stockInfo.price.toFixed(2)}
            </div>
            <div
              className={`${
                stockInfo.change >= 0 ? "text-neonGreen" : "text-neonRed"
              } font-bold`}
            >
              {stockInfo.change.toFixed(2)} ({stockInfo.percentage.toFixed(2)}%)
            </div>
          </div>
        </div>
      )}
      {stockNews && (
        <div className="mt-4">
          <h3 className="text-2xl font-bold mb-2">Latest News</h3>
          <div className="flex flex-col gap-4">
            {stockNews.map((news: any) => (
              <div key={news.title} className="bg-primary p-4 rounded shadow">
                <h3 className="text-neonGreen text-xl font-bold mb-2">
                  {news.title}
                </h3>
                <div className="text-primary font-bold text-lg mb-2">
                  {news.source}
                </div>
                <div className="text-primary font-bold text-lg mb-2">
                  {news.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StockSearchAndInfo;
