import PortfolioPanel from "@/components/dashboard/PortfolioPanel";
import SimpleOrderForm from "@/components/dashboard/SimpleOrderForm";
import StockSearchAndInfo from "@/components/dashboard/StockSearchAndInfo";
import React from "react";

const Interface = () => {
  return (
    <div className="min-h-screen bg-primary text-primary">
      <div className="container mx-auto py-8 px-4 h-full ">
        <h1 className="text-4xl font-bold mb-8">Bot Trading Interface</h1>
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="bg-secondary rounded-lg p-6 shadow-md grow">
            <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">
              Stock Search and Info
            </h2>
            <StockSearchAndInfo />
          </div>
          <div className="bg-secondary rounded-lg p-6 shadow-md grow">
            <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">
              Order Form
            </h2>
            <SimpleOrderForm />
          </div>
          <div className="bg-secondary rounded-lg p-6 shadow-md grow">
            <h2 className="text-3xl font-bold mb-4 border-b border-accent pb-2">
              Portfolio
            </h2>
            <PortfolioPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
