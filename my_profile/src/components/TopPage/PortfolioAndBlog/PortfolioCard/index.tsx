import React from "react";
import Image from "next/image";
import { PortfolioCardProps } from "@/types/PortfolioCard";
import {
  PortfolioCardStyle,
  imageAStyle,
  imageStyle,
  titleStyle,
  descriptionStyle,
} from "./style.css";

export const PortfolioCard = ({
  title,
  description,
  thumbnail: { url, height, width },
  articleSlug,
}: PortfolioCardProps) => {
  return (
    <div className={PortfolioCardStyle}>
      <a href={`/portfolio/${articleSlug}`} className={imageAStyle}>
        <Image
          src={url}
          alt="Portfolio Image"
          width={width}
          height={height}
          unoptimized
          className={imageStyle}
        />
      </a>
      <a href={url}>
        <p className={titleStyle}>{title}</p>
        <p className={descriptionStyle}>{description}</p>
      </a>
    </div>
  );
};
