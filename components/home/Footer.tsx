import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-primary">
            <p className="font-bold mb-1">Autonomous Trading Bots</p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/disclaimer"
                  className="text-primary hover:text-neonGreen"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary hover:text-neonGreen"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-primary hover:text-neonGreen"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
