import { getBlogListData } from "@/libs/microcms";
import BlogListWrapper from "@/components/PortfolioAndBlog/BlogListWrapper";

export default async function AllPortfolioPage() {
  const blogListData = await getBlogListData();

  return <BlogListWrapper blogs={blogListData} />;
}
