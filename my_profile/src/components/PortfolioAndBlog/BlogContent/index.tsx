"use client";

import React from "react";
import Image from "next/image";
import {
  blogStyle,
  titleStyle,
  swiperStyle,
  arrowLeftStyle,
  arrowRightStyle,
  arrowIconStyle,
  viewAllStyle,
  swiperContentStyle,
} from "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { BlogCard } from "../BlogCard";

const BLOG_ITEMS: React.ComponentProps<typeof BlogCard>[] = [
  {
    url: "#",
    date: "2025.1.1",
    text: "Miyazaki's portfolioについて",
    img: "/blog/miyazaki's_profile.png",
    category: "frontend",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/theme/comming_soon.png",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/theme/comming_soon.png",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/theme/comming_soon.png",
    category: "backend",
  },
  {
    url: "#",
    date: "2025.1.1",
    text: "comming soon...comming soon...comming soon...",
    img: "/theme/comming_soon.png",
  },
] as const;

export const BlogContent: React.FC = () => {
  return (
    <div className={blogStyle}>
      <div className={titleStyle}>Blog</div>
      <div className={swiperStyle}>
        {/* カスタム矢印ボタン（左） */}
        <div className={`custom-prev ${arrowLeftStyle}`}>
          <Image
            src="/blog/arrow_l.svg"
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
          {BLOG_ITEMS.map((item, index) => (
            <SwiperSlide key={index.toString()}>
              <BlogCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* カスタム矢印ボタン（右） */}
        <div className={`custom-next ${arrowRightStyle}`}>
          <Image
            src="/blog/arrow_r.svg"
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
  );
};
