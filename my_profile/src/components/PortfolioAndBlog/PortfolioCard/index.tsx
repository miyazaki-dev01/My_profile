import React from "react";
import Image from "next/image";
import { PortfolioCardProps } from "@/types/PortfolioContent";
import {
  PortfolioCardStyle,
  imageAStyle,
  imageStyle,
  titleStyle,
  descriptionStyle,
} from "./style.css";

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  discription,
  image,
  url,
}) => {
  return (
    <div className={PortfolioCardStyle}>
      <a href={url} className={imageAStyle}>
        <Image
          src={image}
          alt="Portfolio Image"
          width={800}
          height={500}
          unoptimized
          className={imageStyle}
        />
      </a>
      <a href={url}>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{discription}</p>
      </a>
    </div>
  );
};
