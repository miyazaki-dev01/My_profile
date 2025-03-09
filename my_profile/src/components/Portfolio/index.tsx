"use client";

import React from "react";
import Image from "next/image";
import {
  portfolioStyle,
  titleStyle,
  swiperStyle,
  arrowLeftStyle,
  arrowRightStyle,
  arrowIconStyle,
  viewAllStyle,
  swiperContentStyle,
} from "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PortfolioCard } from "./PortfolioCard";
import { BasicLayout } from "../BasicLayout";
import Link from "next/link";

const ITEMS: React.ComponentProps<typeof PortfolioCard>[] = [
  {
    url: "#",
    date: "2025.1.1",
    text: "Miyazaki's portfolioについて",
    img: "/portfolio/miyazaki's_profile.png",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/portfolio/comming_soon.png",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/portfolio/comming_soon.png",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/portfolio/comming_soon.png",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/portfolio/comming_soon.png",
  },
] as const;

export const Portfolio: React.FC = () => {
  return (
    <BasicLayout themeColor="black" id="Portfolio">
      <div className={portfolioStyle}>
        <div className={titleStyle}>Portfolio</div>
        <div className={swiperStyle}>
          {/* カスタム矢印ボタン（左） */}
          <div className={`custom-prev ${arrowLeftStyle}`}>
            <Image
              src="/portfolio/arrow_l.svg"
              alt="Previous"
              width={50}
              height={80}
              unoptimized
              className={arrowIconStyle}
            />
          </div>

          {/* Swiperコンテンツ */}
          <Swiper
            className={swiperContentStyle}
            modules={[Navigation, Pagination]}
            slidesPerView={1.2}
            spaceBetween={0}
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                },
                pagination: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                navigation: {
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                },
                pagination: false,
              },
            }}
          >
            {ITEMS.map((item, index) => (
              <SwiperSlide key={index.toString()}>
                <PortfolioCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* カスタム矢印ボタン（右） */}
          <div className={`custom-next ${arrowRightStyle}`}>
            <Image
              src="/portfolio/arrow_r.svg"
              alt="Next"
              width={50}
              height={80}
              unoptimized
              className={`${arrowIconStyle}`}
            />
          </div>
        </div>

        <div className={viewAllStyle}>
          <Link href="#">View All</Link>
        </div>
      </div>
    </BasicLayout>
  );
};
