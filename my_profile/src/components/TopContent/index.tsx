"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  TopContentStyle,
  imageStyle,
  descriptionStyle,
  occupationStyle,
  nameStyle,
  explanatoryStyle,
  linkStyle,
  mailStyle,
  mail_IconStyle,
} from "./style.css";
import { BasicLayout } from "../BasicLayout";
import { IconLink } from "./IconLink";
import { client } from "../../../libs/microcms";

type TopContentProps = {
  job_category: string;
  name: string;
  description: string;
};

// microCMSからトップコンテンツのデータを取得
async function getTpoContent(): Promise<TopContentProps> {
  const data = await client.get({
    endpoint: "top-content",
  });
  return data;
}
// microCMSからアイコンデータを取得
async function getIconItems(): Promise<React.ComponentProps<typeof IconLink>[]> {
  const data = await client.get({
    endpoint: "top-icon-items",
  });
  return data.contents;
}

export const TopContent: React.FC = () => {
  const [topData, setTopData] = useState<TopContentProps | null>(null);
  const [iconItems, setIconItems] = useState<React.ComponentProps<typeof IconLink>[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topContent, icons] = await Promise.all([
          getTpoContent(),
          getIconItems(),
        ]);
        setTopData(topContent);
        setIconItems(icons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BasicLayout themeColor="white">
        <div className={TopContentStyle}>
          {/* プロフィール画像 */}
          <div>
            <Image
              src="/profile/profile_image.jpeg"
              alt="Features Image"
              width={3012}
              height={1928}
              unoptimized
              className={imageStyle}
            />
          </div>

          {/* ディスクリプション */}
          <div className={descriptionStyle}>
            <div>
              {topData && (
                <>
                  <p className={occupationStyle}>{topData.job_category}</p>
                  <h2 className={nameStyle}>{topData.name}</h2>
                  <div
                    className={explanatoryStyle}
                    dangerouslySetInnerHTML={{ __html: topData.description }}
                  />
                </>
              )}
            </div>

            {/* リンク */}
            <div className={linkStyle}>
              {iconItems.map((item, index) => (
                <IconLink key={index} {...item} />
              ))}
              <a href="#Contact" className={mailStyle}>
                <img
                  src="/icon/topcontent/mail.svg"
                  alt="mail"
                  className={mail_IconStyle}
                />
              </a>
            </div>
          </div>
        </div>
      </BasicLayout>
    </>
  );
};
