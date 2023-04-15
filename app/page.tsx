"use client";

import BotDetails from "@/components/home/BotDetails";
import Leaderboard, { Bot } from "@/components/home/Leaderboard";
import { useState } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import MarketOverview from "@/components/home/MarketOverview";
import RecentTrades from "@/components/home/RecentTrades";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Home() {
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  return (
    <>
      <MarketOverview />
      <RecentTrades />
      <Leaderboard onBotClick={(bot) => setSelectedBot(bot)} />
      {selectedBot && <BotDetails bot={selectedBot} />}
    </>
  );
}
