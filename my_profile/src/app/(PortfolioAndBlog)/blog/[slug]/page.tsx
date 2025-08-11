import React from "react";
import { getAllBlogSlugs, getBlogBySlug } from "@/libs/microcms";
import type { Metadata } from "next";
import { generateMetadataByContent } from "@/components/PortfolioAndBlog/ContentPage/MetaData";
import { PATH } from "@/constants/paths";
import { META } from "@/constants/meta";
import { notFound } from "next/navigation";
import { fetchOgpDataFromMdx } from "@/libs/fetchOgpDataFromMdx";
import { MdxComponents } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { mdxOptions } from "@/libs/mdxOptions";
import BlogClientWrapper from "@/components/PortfolioAndBlog/ContentPage/BlogClientWrapper";


type PageProps = {
  params: Promise<{ slug: string }>;
};

// SG用(全ポートフォリオ記事slug取得)
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return (slugs ?? []).map(({ articleSlug }) => ({ slug: articleSlug }));
}

// Meta情報生成
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return generateMetadataByContent({
    slug,
    getContentBySlug: getBlogBySlug,
    pathPrefix: PATH.blog,
    siteName: META.siteTitle,
  });
}

export default async function BlogContentPage({ params }: PageProps) {
  const { slug } = await params;
  const blogContentData = await getBlogBySlug(slug);

  // 存在しなければ 404
  if (!blogContentData) return notFound();

  // Markdown → MDX に変換しつつ、OGPも取得
  const { ogpDataList } = await fetchOgpDataFromMdx(blogContentData.body);
  const components = MdxComponents(blogContentData.images, ogpDataList);

  return (
    <BlogClientWrapper blogContent={blogContentData}>
      <MDXRemote
        source={blogContentData.body}
        options={mdxOptions}
        components={components}
      />
    </BlogClientWrapper>
  );
}
