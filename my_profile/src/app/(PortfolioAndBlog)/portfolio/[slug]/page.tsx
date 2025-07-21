import React from "react";
import { notFound } from "next/navigation";
import { getAllPortfolioSlugs, getPortfolioBySlug } from "@/libs/microcms";
import { parseMdx } from "@/libs/NextMdxRemote";
import PortfolioClientWrapper from "@/components/PortfolioAndBlog/ContentPage/PortfolioClientWrapper";
import { generateMetadataByContent } from "@/components/PortfolioAndBlog/ContentPage/MetaData";
import { PATH } from "@/constants/paths";
import { META } from "@/constants/meta";
import type { Metadata } from "next";

type PageProps = {
  params: { slug: string };
};

// SG用(全ポートフォリオ記事slug取得)
export async function generateStaticParams() {
  const slugs = await getAllPortfolioSlugs();
  return (slugs ?? []).map(({ articleSlug }) => ({ slug: articleSlug }));
}

// Meta情報生成
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return generateMetadataByContent({
    params,
    getContentBySlug: getPortfolioBySlug,
    pathPrefix: PATH.portfolio,
    siteName: META.siteTitle,
  });
}

export default async function PortfolioContentPage({ params }: PageProps) {
  const portfolioContentData = await getPortfolioBySlug(params.slug);

  // 存在しなければ 404
  if (!portfolioContentData) return notFound();

  // Markdown → MDX に変換しつつ、OGPも取得
  const { mdxSource, ogpDataList } = await parseMdx(portfolioContentData.body);

  return (
    <PortfolioClientWrapper
      portfolioContent={portfolioContentData}
      mdxSource={mdxSource}
      ogpDataList={ogpDataList}
    />
  );
}
