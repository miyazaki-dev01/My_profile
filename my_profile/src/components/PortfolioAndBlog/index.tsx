import React from "react";
import { BasicLayout } from "../BasicLayout";
import { BlogContent } from "./BlogContent";
import { PortfolioContent } from "./PortfolioContent";
import { PortfolioAndBlogStyle } from "./style.css";

export const PortfolioAndBlog: React.FC = () => {
  return (
    <BasicLayout themeColor="black" id="PortfolioAndBlog">
      <div className={PortfolioAndBlogStyle}>
        <PortfolioContent />
        <BlogContent />
      </div>
    </BasicLayout>
  );
};
