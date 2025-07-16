import { createClient } from "microcms-js-sdk";
import { TopContentProps } from "../types/topContent";
import { PortfolioCardProps } from "@/types/PortfolioCard";
import { BlogCardProps } from "@/types/BlogCard";

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Client SDKの初期化を行う
export const client = createClient({
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
});

// トップコンテンツのデータ取得
export const getTopContentData = async (): Promise<TopContentProps> => {
  const data = await client.get({ endpoint: "top-content" });
  return data;
};

// ポートフォリオ一覧のデータ取得（トップページ）
export const getPortfolioListDataForTop = async (): Promise<
  PortfolioCardProps[]
> => {
  const data = await client.get({
    endpoint: "portfolio",
    queries: { fields: "id,title,description,thumbnail,articleSlug", limit: 2 },
  });
  return data.contents;
};

// ポートフォリオ一覧のデータ取得
export const getPortfolioListData = async (): Promise<PortfolioCardProps[]> => {
  const data = await client.get({
    endpoint: "portfolio",
    queries: { fields: "id,title,description,thumbnail,articleSlug" },
  });
  return data.contents;
};

// ブログ一覧のデータ取得（トップページ）
export const getBlogListDataForTop = async (): Promise<BlogCardProps[]> => {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      fields: "id,title,category,thumbnail,articleSlug,updatedAt",
      limit: 5,
    },
  });
  return data.contents;
};

// ブログ一覧のデータ取得
export const getBlogListData = async (): Promise<BlogCardProps[]> => {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      fields: "id,title,category,thumbnail,articleSlug,updatedAt",
    },
  });
  return data.contents;
};
