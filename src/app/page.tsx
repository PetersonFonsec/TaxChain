import AboutSection from "./components/sections/about/about";
import FooterSection from "./components/sections/footer/footer";
import LandPageSection from "./components/sections/land-page/land-page";

export default function Home() {
  return (
    <>
      <main >
        <LandPageSection />
        <AboutSection/>
      </main>
      <FooterSection/>
    </>
  );
}
