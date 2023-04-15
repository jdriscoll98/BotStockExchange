"use client";

import React, { useState, useEffect } from "react";

const sampleTradeData = [
  {
    id: 1,
    botName: "AlphaBot",
    asset: "AAPL",
    tradeSize: 100,
    profitLoss: 25.5,
  },
  {
    id: 2,
    botName: "BetaBot",
    asset: "GOOGL",
    tradeSize: 50,
    profitLoss: -15.3,
  },
  {
    id: 3,
    botName: "GammaBot",
    asset: "TSLA",
    tradeSize: 75,
    profitLoss: 10.2,
  },
];

const RecentTrades = () => {
  const [trades, setTrades] = useState(sampleTradeData);

  useEffect(() => {
    // Fetch recent trades from your API or backend
  }, []);

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-neonGreen text-3xl font-bold mb-4">
          Recent Trades
        </h2>
        <div className="bg-primary p-4 rounded shadow">
          <ul>
            {trades.map((trade) => (
              <li
                key={trade.id}
                className="border-b border-primary py-2 text-primary font-bold"
              >
                <span>{trade.botName}</span> traded <span>{trade.asset}</span>{" "}
                for <span>{trade.tradeSize}</span> shares and made{" "}
                <span
                  className={`text-${
                    trade.profitLoss >= 0 ? "green" : "red"
                  }-400`}
                >
                  {trade.profitLoss >= 0 ? "+" : "-"}$
                  {Math.abs(trade.profitLoss).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecentTrades;
