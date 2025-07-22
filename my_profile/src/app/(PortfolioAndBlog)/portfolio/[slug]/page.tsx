import React from "react";
import { notFound } from "next/navigation";
import { getAllPortfolioSlugs, getPortfolioBySlug } from "@/libs/microcms";
import PortfolioClientWrapper from "@/components/PortfolioAndBlog/ContentPage/PortfolioClientWrapper";
import { generateMetadataByContent } from "@/components/PortfolioAndBlog/ContentPage/MetaData";
import { PATH } from "@/constants/paths";
import { META } from "@/constants/meta";
import type { Metadata } from "next";
import { fetchOgpDataFromMdx } from "@/libs/fetchOgpDataFromMdx";
import { MdxComponents } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { mdxOptions } from "@/libs/mdxOptions";

type PageProps = {
  params: Promise<{ slug: string }>;
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
  const { slug } = await params;
  return generateMetadataByContent({
    slug,
    getContentBySlug: getPortfolioBySlug,
    pathPrefix: PATH.portfolio,
    siteName: META.siteTitle,
  });
}

export default async function PortfolioContentPage({ params }: PageProps) {
  const { slug } = await params;
  const portfolioContentData = await getPortfolioBySlug(slug);

  // 存在しなければ 404
  if (!portfolioContentData) return notFound();

  // Markdown → MDX に変換しつつ、OGPも取得
  const { ogpDataList } = await fetchOgpDataFromMdx(portfolioContentData.body);
  const components = MdxComponents(portfolioContentData.images, ogpDataList);

  return (
    <PortfolioClientWrapper portfolioContent={portfolioContentData}>
      <MDXRemote
        source={portfolioContentData.body}
        options={mdxOptions}
        components={components}
      />
    </PortfolioClientWrapper>
  );
}
