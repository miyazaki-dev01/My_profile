"use client";

import React from "react";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { PortfoliosProps } from "@/types/PortfolioCard";
import Image from "next/image";

export default function PortfolioListWrapper({ portfolios }: PortfoliosProps) {
  useScrollRestoration();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Portfolio</h1>
      <div className="space-y-6">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="space-y-2">
            <Image
              src={portfolio.thumbnail.url}
              alt="Portfolio Image"
              width={portfolio.thumbnail.width}
              height={portfolio.thumbnail.height}
              unoptimized
            />
            <h2 className="mt-2 font-bold">{portfolio.title}</h2>
            <p>{portfolio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
