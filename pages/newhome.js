import Image from "next/image";
import { Inter } from "next/font/google";
import MainBanner from "../Components/MainBanner";
import NavBar from "../Components/NavBar";
import OurServics from "../Components/OurServics";
import HomePhoneSection from "../Components/HomePhoneSection";
import HomeLaptopSection from "../Components/HomeLaptopSection";
import HomeTablet from "../Components/HomeTablet";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      // <MainBanner />
      <OurServics />
      <HomePhoneSection />
      <HomeLaptopSection />
      <HomeTablet />
      <InfoSection />
      <Footer />
    </>
  );
}
