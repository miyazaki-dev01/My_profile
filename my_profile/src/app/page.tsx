import { TopContent } from "@/components/TopPage/TopContent";
import { PortfolioAndBlog } from "@/components/TopPage/PortfolioAndBlog";
import { SkillsAndQualification } from "@/components/TopPage/Skills";
import { Career } from "@/components/TopPage/Career";
import { Working } from "@/components/TopPage/Working";
import {
  getTopContentData,
  getPortfolioListDataForTop,
  getBlogListDataForTop,
} from "@/libs/microcms";
import { Navbar } from "@/components/TopPage/Navbar";
import { Footer } from "@/components/TopPage/Footer";
import SmoothScrollWrapper from "@/components/TopPage/SmoothScrollWrapper";

export const dynamic = "force-static"; // 静的生成

export default async function Home() {
  const topData = await getTopContentData();
  const portfolioCardData = await getPortfolioListDataForTop();
  const BlogCardData = await getBlogListDataForTop();

  return (
    <>
      <Navbar />
      <SmoothScrollWrapper>
        <main className="mt-[50px]">
          <TopContent topData={topData} />
          <PortfolioAndBlog
            portfolios={portfolioCardData}
            blogs={BlogCardData}
          />
          <SkillsAndQualification />
          <Career />
          <Working />
        </main>
      </SmoothScrollWrapper>
      <Footer />
    </>
  );
}
