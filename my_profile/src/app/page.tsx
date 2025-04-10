import { TopContent } from "../components/TopContent";
import { PortfolioAndBlog } from "../components/Portfolio";
import { SkillsAndQualification } from "../components/SkillsAndQualification";
import { Career } from "../components/Career";
import { Working } from "../components/Working";
import { getTopContent } from "../libs/microcms";

export const dynamic = "force-static"; // 静的生成明示

export default async function Home() {
  const topData = await getTopContent();

  return (
    <main className="mt-[50px]">
      <TopContent topData={topData} />
      <PortfolioAndBlog />
      <SkillsAndQualification />
      <Career />
      <Working />
    </main>
  );
}
