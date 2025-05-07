import React from "react";
import Link from "next/link";
import { PortfolioCard } from "../PortfolioCard";
import { titleStyle, portfolioStyle, viewAllStyle } from "./style.css";

const PORTFOLIO_ITEMS: React.ComponentProps<typeof PortfolioCard>[] = [
  {
    title: "Miyazaki's portfolioについて",
    discription: "Miyazaki's portfolioについての記事です。Miyazaki's portfolioについての説明をしています。",
    image: "/blog/miyazaki's_profile.png",
    url: "#",
  },
  {
    title: "ポートフォリオタイトル",
    discription: "comming soon...comming soon...comming soon...comming soon...comming soon...comming soon...comming soon...comming soon...comming soon...",
    image: "/theme/comming_soon.png",
    url: "#",
  },
] as const;

export const PortfolioContent: React.FC = () => {
  return (
    <div>
      <div className={titleStyle}>Portfolio</div>
      <div className={portfolioStyle}>
        {PORTFOLIO_ITEMS.map((item, index) => (
          <PortfolioCard key={index.toString()} {...item} />
        ))}
      </div>
      <div className={viewAllStyle}>
        <Link href="#">View All</Link>
      </div>
    </div>
  );
};
