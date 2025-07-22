import { CustomImage } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/CustomImage";
import { OgpCard } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/OgpCard";
import * as styles from "./style.css";
import type { MDXComponents } from "next-mdx-remote-client/rsc";

type CustomImageProps = React.ComponentProps<typeof CustomImage>;
type OgpCardProps = React.ComponentProps<typeof OgpCard>;

export const MdxComponents = (
  images: CustomImageProps["images"],
  ogpMap: Record<string, OgpCardProps["ogp"]>
): MDXComponents => ({
  // 見出し
  h1: (props) => <h1 className="text-2xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-xl font-bold my-3" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold my-2" {...props} />,

  // テキスト要素
  p: (props) => <p className="my-2 leading-relaxed" {...props} />,
  strong: (props) => <strong className={styles.strong} {...props} />,
  blockquote: (props) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  code: (props) => <code className={styles.inlineCode} {...props} />,
  a: (props) => <a className={styles.link} {...props} />,

  // リスト
  ul: (props) => <ul className={styles.unorderedList} {...props} />,
  ol: (props) => <ol className={styles.orderedList} {...props} />,
  li: (props) => <li className={styles.listItem} {...props} />,

  // テーブル
  table: (props) => <table className={styles.table} {...props} />,
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className={styles.tableRow} {...props} />,
  th: (props) => <th className={styles.tableHeader} {...props} />,
  td: (props) => <td className={styles.tableCell} {...props} />,

  // カスタム画像
  CustomImage: ({ idx }: { idx: number }) => (
    <CustomImage idx={idx} images={images} />
  ),

  // OGPカード
  OgpCard: ({ url }: { url: string }) => {
    const ogp = ogpMap[url];
    if (!ogp) return null;
    return <OgpCard ogp={ogp} />;
  },

  // 任意：ラッパー
  wrapper: ({ children }) => (
    <div className="my-20">{children}</div>
  ),
});
