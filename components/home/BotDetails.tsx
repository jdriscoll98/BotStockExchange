import React from "react";
import { Line } from "react-chartjs-2";
import { Bot } from "./Leaderboard";

const sampleChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Profit/Loss",
      data: [12, 19, 3, 5, 2, 3, 10, 7, 12, 5, 8, 4],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.1)",
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const BotDetails = ({ bot }: { bot: Bot }) => {
  return (
    <div className="bg-secondary p-4 rounded">
      <h2 className="text-neonGreen text-2xl font-bold mb-4">
        Bot Statistics & Performance: {bot.name}
      </h2>
      <div className="mb-8">
        <h3 className="text-primary text-lg font-bold">Performance Chart</h3>
        <Line data={sampleChartData} />
      </div>
    </div>
  );
};

export default BotDetails;
