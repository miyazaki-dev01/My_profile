import { Navbar } from "../components/Navbar/index";
import { TopContent } from "../components/TopContent";
import { Portfolio } from "../components/Portfolio";
import { SkillsAndQualification } from "../components/SkillsAndQualification";
import { Career } from "../components/Career";
import { Working } from "../components/Working";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-[50px]">
        <TopContent />
        <Portfolio />
        <SkillsAndQualification />
        <Career />
        <Working />
        <Footer />
      </main>
    </>
  );
}
