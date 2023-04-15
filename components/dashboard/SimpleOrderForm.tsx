"use client";

import React, { useState } from "react";

const SimpleOrderForm = () => {
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState("buy");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary rounded-lg p-6 shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="ticker" className="block text-xl font-bold mb-2">
          Ticker Symbol
        </label>
        <input
          type="text"
          id="ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="bg-primary text-primary w-full px-4 py-2 rounded outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-xl font-bold mb-2">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="bg-primary text-primary w-full px-4 py-2 rounded outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <span className="text-xl font-bold mr-4">Order Type</span>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="buy"
            checked={orderType === "buy"}
            onChange={() => setOrderType("buy")}
            className="text-accent"
          />
          <span className="ml-2 text-primary">Buy</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="sell"
            checked={orderType === "sell"}
            onChange={() => setOrderType("sell")}
            className="text-accent"
          />
          <span className="ml-2 text-primary">Sell</span>
        </label>
      </div>
      <button
        type="submit"
        className="bg-highlight text-primary font-bold px-6 py-2 rounded"
      >
        Submit Order
      </button>
    </form>
  );
};

export default SimpleOrderForm;
