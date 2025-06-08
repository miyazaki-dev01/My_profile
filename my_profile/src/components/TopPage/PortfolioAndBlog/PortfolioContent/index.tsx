import React from "react";
import Link from "next/link";
import { PortfolioCard } from "../PortfolioCard";
import { titleStyle, portfolioStyle, viewAllStyle } from "./style.css";
import { PortfoliosProps } from "@/types/PortfolioCard";

export const PortfolioContent = ({ portfolios }: PortfoliosProps) => {
  return (
    <div>
      <div className={titleStyle} id="Portfolio">
        Portfolio
      </div>
      <div className={portfolioStyle}>
        {portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.id} {...portfolio} />
        ))}
      </div>
      <div className={viewAllStyle}>
        <Link href="/portfolio">View All</Link>
      </div>
    </div>
  );
};
