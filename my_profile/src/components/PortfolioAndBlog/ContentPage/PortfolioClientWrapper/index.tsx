"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioDetailProps } from "@/types/PortfolioContent";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";
import { usePageLoading } from "@/hooks/usePageLoading";
import Loader from "@/components/PortfolioAndBlog/Loader";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MdxComponents } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents";
import "@/styles/prism.css";
import * as styles from "./style.css";
import { SnsShareIcons } from "@/components/PortfolioAndBlog/ContentPage/SnsShareIcon";
import { URL } from "@/constants/url";
import { PATH } from "@/constants/paths";
import type { OgpCache } from "@/types/ogp";

type Props = {
  portfolioContent: PortfolioDetailProps;
  mdxSource: MDXRemoteSerializeResult;
  ogpDataList: OgpCache;
};

export default function PortfolioClientWrapper({
  portfolioContent,
  mdxSource,
  ogpDataList,
}: Props) {
  useScrollRestoration();

  // ページの全リソースが読み込まれたかどうかを判定するカスタムフック
  const loaded = usePageLoading();

  const url = `${URL.appRoot}${PATH.portfolio}/${portfolioContent.articleSlug}`;

  return (
    <>
      {!loaded && <Loader />}

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <div className={styles.contentDivStyle}>
          <h1 className={styles.TitleStyle}>{portfolioContent.title}</h1>
          <hr className={styles.TitleHrStyle} />
          <div className={styles.DiscriptionStyle}>
            {portfolioContent.description}
          </div>
          <div className={styles.ImageDivStyle}>
            <Link href={portfolioContent.serviceURL} target="_blank">
              <Image
                src={portfolioContent.thumbnail.url}
                alt="Portfolio Thumbnail"
                width={portfolioContent.thumbnail.width}
                height={portfolioContent.thumbnail.height}
                unoptimized
              />
              <div>
                <p>サイトを見る：{portfolioContent.serviceURL}</p>
              </div>
            </Link>
          </div>
          <MDXRemote
            {...mdxSource}
            components={MdxComponents(portfolioContent.images, ogpDataList)}
          />
          <div>
            <SnsShareIcons url={url} title={portfolioContent.title} />
          </div>
        </div>
      </div>
    </>
  );
}
