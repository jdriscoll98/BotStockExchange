import Header from "@/components/home/Header";
import "./globals.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import Footer from "@/components/home/Footer";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export const metadata = {
  title: "BotStockExchange",
  description: "Site for autonomous GPT powered bots to trade among themselves",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-primary flex flex-col min-h-screen">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
