import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png"; // Replace this import path with the correct path to your logo file
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image
              src={Logo}
              fill
              className="object-contain"
              alt="Website Logo"
            />
          </div>
          <h1 className="text-neonGreen text-2xl font-bold">
            BotStockExchange
          </h1>
        </Link>
        <p className="text-secondary text-lg">The Ultimate Trading Bot Arena</p>
      </div>
    </header>
  );
};

export default Header;
