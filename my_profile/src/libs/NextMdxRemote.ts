import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { fetchOgpData } from "@/libs/fetchOgpData";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { OgpCache } from "@/types/ogp";

export const parseMdx = async (
  mdxText: string
): Promise<{
  mdxSource: MDXRemoteSerializeResult;
  ogpDataList: OgpCache;
}> => {
  const ogpDataList: OgpCache = {};

  // 正規表現で <OgpCard url="..." /> を抽出
  const regex = /<OgpCard\s+url="([^"]+)"\s*\/?>/g;
  const matches = mdxText.matchAll(regex);

  const uniqueUrls = new Set<string>();
  for (const match of matches) {
    uniqueUrls.add(match[1]);
  }

  // すべてのURLに対してOGPデータを取得
  const resolved = await Promise.all(
    Array.from(uniqueUrls).map(async (url) => {
      const data = await fetchOgpData(url);
      return [url, data] as const;
    })
  );

  for (const [url, data] of resolved) {
    ogpDataList[url] = data;
  }

  // MDX本体を変換
  const mdxSource = await serialize(mdxText, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        [rehypePrism, { showLineNumbers: true }],
      ],
      format: "mdx",
    },
  });

  return { mdxSource, ogpDataList };
};

export default parseMdx;
