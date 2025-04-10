import React from "react";
import { BasicLayout } from "../BasicLayout";
import { BlogContent } from "./BlogContent";

export const PortfolioAndBlog: React.FC = () => {
  return (
    <BasicLayout themeColor="black" id="PortfolioAndBlog">
      <BlogContent />
    </BasicLayout>
  );
};
