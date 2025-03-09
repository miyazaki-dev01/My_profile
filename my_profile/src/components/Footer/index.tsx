import React from "react";
import { FooterStyle, FooterTextStyle } from "./style.css";

export const Footer: React.FC = () => {
  return (
    <>
      <div className={FooterStyle}>
        <div className={FooterTextStyle}>
          <span>Copyright © 2025 Miyazaki&apos;s profile</span>
        </div>
      </div>
    </>
  );
};
