import React from "react";
import Sidebar from "@/components/PortfolioAndBlog/Sidebar";
import {
  portfolioAndBlogStyle,
  mainStyle,
  divStyle,
  footerStyle,
} from "./style.css";

export const dynamic = "force-static"; // 静的生成

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={portfolioAndBlogStyle}>
      <Sidebar />
      <main className={mainStyle}>
        <div className={divStyle}>{children}</div>
      </main>
      <footer className={footerStyle}>
        © 2025 Miyazaki All rights reserved.
      </footer>
    </div>
  );
}
