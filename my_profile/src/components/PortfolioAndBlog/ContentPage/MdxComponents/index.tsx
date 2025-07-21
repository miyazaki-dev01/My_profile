import React from "react";
import { CustomImage } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/CustomImage";
import { OgpCard } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/OgpCard";
import * as styles from "./style.css";

// 型定義
type CustomImageProps = React.ComponentProps<typeof CustomImage>;
type OgpCardProps = React.ComponentProps<typeof OgpCard>;

// 拡張版 components 関数
export const MdxComponents = (
  images: CustomImageProps["images"],
  ogpMap: Record<string, OgpCardProps["ogp"]>
) => ({
  // hxタグ
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-2xl font-bold my-4" {...props} />
  ),

  // 太字
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className={styles.strong} {...props} />
  ),

  // 引用
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className={styles.blockquote} {...props} />
  ),

  // 箇条書き（ul）
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className={styles.unorderedList} {...props} />
  ),

  // 番号付きリスト（ol）
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className={styles.orderedList} {...props} />
  ),

  // リスト項目
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className={styles.listItem} {...props} />
  ),

  // インラインコード
  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code className={styles.inlineCode} {...props} />
  ),

  // リンク
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a className={styles.link} {...props} />
  ),

  // テーブル関連
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <table className={styles.table} {...props} />
  ),
  thead: (props: React.ComponentPropsWithoutRef<"thead">) => (
    <thead {...props} />
  ),
  tbody: (props: React.ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props} />
  ),
  tr: (props: React.ComponentPropsWithoutRef<"tr">) => (
    <tr className={styles.tableRow} {...props} />
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th className={styles.tableHeader} {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className={styles.tableCell} {...props} />
  ),

  // 画像
  CustomImage: (props: { idx: number }) => (
    <CustomImage {...props} images={images} />
  ),

  // OGPカード
  OgpCard: ({ url }: { url: string }) => {
    const ogp = ogpMap[url];
    if (!ogp) return null;
    return <OgpCard ogp={ogp} />;
  },
});
