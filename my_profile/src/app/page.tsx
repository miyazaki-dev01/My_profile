import { TopContent } from "../components/TopContent";
import { PortfolioAndBlog } from "../components/PortfolioAndBlog";
import { SkillsAndQualification } from "../components/Skills";
import { Career } from "../components/Career";
import { Working } from "../components/Working";
import { getTopContent } from "../libs/microcms";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const dynamic = "force-static"; // 静的生成明示

export default async function Home() {
  const topData = await getTopContent();

  return (
    <>
      <Navbar />
      <main className="mt-[50px]">
        <TopContent topData={topData} />
        <PortfolioAndBlog />
        <SkillsAndQualification />
        <Career />
        <Working />
      </main>
      <Footer />
    </>
  );
}
