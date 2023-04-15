"use client";

import React, { useState } from "react";

const sampleData = [
  {
    id: 1,
    name: "Bot Alpha",
    avatar: "",
    balance: 15000,
    profit: 5000,
    winRate: 60,
  },
  {
    id: 2,
    name: "Bot Bravo",
    avatar: "",
    balance: 12000,
    profit: 6000,
    winRate: 55,
  },
  {
    id: 3,
    name: "Bot Charlie",
    avatar: "",
    balance: 10000,
    profit: 1000,
    winRate: 65,
  },
];

export type Bot = typeof sampleData[0];

const Leaderboard = ({ onBotClick }: { onBotClick: (bot: Bot) => void }) => {
  const [view, setView] = useState<"grid" | "table">("grid");
  const [bots, setBots] = useState(sampleData);
  const [sortBy, setSortBy] = useState("profit");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);

    const sortedBots = [...bots].sort((a, b) => {
      if (e.target.value === "profit") {
        return b.profit - a.profit;
      } else if (e.target.value === "balance") {
        return b.balance - a.balance;
      } else {
        return b.winRate - a.winRate;
      }
    });

    setBots(sortedBots);
  };

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-neonGreen text-3xl font-bold mb-4">Leaderboard</h2>
        <div className="flex justify-between mb-4">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {/* toggle for view */}
            <button
              onClick={() => setView("grid")}
              className={`${
                view === "grid" ? "bg-highlight" : "bg-primary"
              } text-primary font-bold rounded p-2 mr-2`}
            >
              Grid
            </button>
            <button
              onClick={() => setView("table")}
              className={`${
                view === "table" ? "bg-highlight" : "bg-primary"
              } text-primary font-bold rounded p-2`}
            >
              Table
            </button>
          </div>
          <div className="flex">
            <label htmlFor="sort" className="text-primary text-lg mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="bg-highlight text-primary border border-primary rounded p-2"
            >
              <option value="profit">Profit</option>
              <option value="balance">Balance</option>
              <option value="winRate">Win Rate</option>
            </select>
          </div>
        </div>

        {view === "grid" ? (
          <LeaderboardGrid bots={bots} onBotClick={onBotClick} />
        ) : (
          <LeaderboardTable bots={bots} onBotClick={onBotClick} />
        )}
      </div>
    </section>
  );
};

const LeaderboardGrid = ({
  bots,
  onBotClick,
}: {
  bots: Bot[];
  onBotClick: (bot: Bot) => void;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {bots.map((bot, index) => (
      <div
        key={bot.id}
        className="bg-primary p-4 rounded shadow cursor-pointer"
        onClick={() => onBotClick(bot)}
      >
        <h3 className="text-neonGreen text-xl font-bold mb-2">{bot.name}</h3>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-1">
            <span className="block text-secondary text-sm">Balance</span>
            <span className="block text-primary font-bold">
              ${bot.balance.toLocaleString()}
            </span>
          </div>
          <div className="w-1/2 p-1">
            <span className="block text-secondary text-sm">Profit</span>
            <span className="block text-primary font-bold">
              ${bot.profit.toLocaleString()}
            </span>
          </div>
          <div className="w-1/2 p-1">
            <span className="block text-secondary text-sm">Win Rate</span>
            <span className="block text-primary font-bold">{bot.winRate}%</span>
          </div>
          <div className="w-1/2 p-1">
            <span className="block text-secondary text-sm">Rank</span>
            <span className="block text-primary font-bold">{index + 1}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const LeaderboardTable = ({
  bots,
  onBotClick,
}: {
  bots: Bot[];
  onBotClick: (bot: Bot) => void;
}) => (
  <div className="overflow-x-auto">
    <table className="w-full text-primary">
      <thead>
        <tr>
          <th className="text-left p-2">#</th>
          <th className="text-left p-2">Bot Name</th>
          <th className="text-left p-2">Balance</th>
          <th className="text-left p-2">Profit</th>
          <th className="text-left p-2">Win Rate</th>
        </tr>
      </thead>
      <tbody>
        {bots.map((bot, index) => (
          <tr
            key={bot.id}
            className={`cursor-pointer bg-primary ${
              index % 2 === 0 ? "bg-highlight" : ""
            }`}
            onClick={() => onBotClick(bot)}
          >
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{bot.name}</td>
            <td className="p-2">${bot.balance.toLocaleString()}</td>
            <td className="p-2">${bot.profit.toLocaleString()}</td>
            <td className="p-2">{bot.winRate}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Leaderboard;
