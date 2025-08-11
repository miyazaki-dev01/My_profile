import ogs from "open-graph-scraper";
import fs from "fs/promises";
import type { OgpCache, OgpData } from "@/types/ogp";

const CACHE_FILE = "ogp-cache.json";

export async function fetchOgpData(url: string): Promise<OgpData> {
  const cache: OgpCache = JSON.parse(
    await fs.readFile(CACHE_FILE, "utf-8").catch(() => "{}")
  );

  // キャッシュにurlが存在するか確認し、あればデータ取得は行わない
  if (cache[url]) return cache[url];

  const { result } = await ogs({ url });
  const typedResult = result as OgpData;

  cache[url] = typedResult;
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
  return typedResult;
}
