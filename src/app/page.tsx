import BgCanvas from "@/components/BgCanvas";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import TournamentStats from "@/components/TournamentStats";
import HostCities from "@/components/HostCities";
import MatchTimeline from "@/components/MatchTimeline";
import TeamExplorer from "@/components/TeamExplorer";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BgCanvas />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <div className="section-divider" />
        <Countdown />
        <div className="section-divider" />
        <TournamentStats />
        <div className="section-divider" />
        <HostCities />
        <div className="section-divider" />
        <MatchTimeline />
        <div className="section-divider" />
        <TeamExplorer />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
