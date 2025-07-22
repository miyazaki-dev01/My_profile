import { fetchOgpData } from "@/libs/fetchOgpData";
import type { OgpCache } from "@/types/ogp";

export const fetchOgpDataFromMdx = async (
  mdxText: string
): Promise<{
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

  return { ogpDataList };
};
