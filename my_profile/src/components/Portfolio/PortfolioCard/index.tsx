import React from "react";
import Image from "next/image";
import {
  imageAStyle,
  imageStyle,
  cardStyle,
  dateStyle,
  titleStyle,
  descriptionStyle,
} from "./style.css";

type Props = {
  url: string;
  img: string;
  date: string;
  text: string;
};

export const PortfolioCard: React.FC<Props> = ({ url, img, date, text }) => {
  return (
    <div className={cardStyle}>
      <a href={url} className={imageAStyle}>
        <Image
          className={imageStyle}
          src={img}
          alt="Features Image"
          width={800}
          height={500}
          unoptimized
        />
      </a>
      <a href={url} className={descriptionStyle}>
        <p className={dateStyle}>{date}</p>
        <p className={titleStyle}>{text}</p>
      </a>
    </div>
  );
};
