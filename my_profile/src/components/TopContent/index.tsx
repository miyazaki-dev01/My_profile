import React from "react";
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

const ICON_ITEMS: React.ComponentProps<typeof IconLink>[] = [
  {
    href: "https://x.com/miyazaki_dev01",
    alt: "X",
    src: "/icon/topcontent/x.svg",
  },
  {
    href: "https://github.com/miyazaki-dev01",
    alt: "GitHub",
    src: "/icon/topcontent/github.svg",
  },
  {
    href: "https://atcoder.jp/users/MiyazakiTakahiro",
    alt: "AtCoder",
    src: "/icon/topcontent/at-coder.svg",
    size: "medium",
  },
] as const;

export const TopContent: React.FC = () => {
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
              <p className={occupationStyle}>Software Developer</p>
              <h2 className={nameStyle}>Takahiro Miyazaki</h2>
              <div className={explanatoryStyle}>
                <p>
                  初めまして！宮﨑貴大と申します。
                  <br />
                  普段は人材系事業会社のWebエンジニアとして、サイトの保守・運用などを担当しています。
                  <br />
                  ここでは私の実績・技術・経歴などについて紹介しています。
                </p>
                <p>
                  技術の習得にも積極的に取り組み、迅速かつ柔軟な対応を心がけています。
                  <br />
                  お仕事のご相談がありましたら、ぜひお気軽にご連絡ください。
                </p>
              </div>
            </div>

            {/* リンク */}
            <div className={linkStyle}>
              {ICON_ITEMS.map((item, index) => (
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
