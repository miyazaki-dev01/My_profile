import { getPortfolioListData } from "@/libs/microcms";
import PortfolioListWrapper from "@/components/PortfolioAndBlog/PortfolioListWrapper";

export default async function AllPortfolioPage() {
  const portfolioListData = await getPortfolioListData();

  return <PortfolioListWrapper portfolios={portfolioListData} />;
}
