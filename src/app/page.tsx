import AboutSection from "./components/sections/about/about";
import FooterSection from "./components/sections/footer/footer";
import LandPageSection from "./components/sections/land-page/land-page";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={style.page}>
        <LandPageSection />
        <AboutSection/>
      </main>
      <FooterSection/>
    </>
  );
}
