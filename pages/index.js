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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuw2_yAekDI0A_Or1VuzwJuocQzWwZ0xI",
  authDomain: "refurbys-22f09.firebaseapp.com",
  projectId: "refurbys-22f09",
  storageBucket: "refurbys-22f09.appspot.com",
  messagingSenderId: "339400744723",
  appId: "1:339400744723:web:99b26cb06a906fef3ac4e6",
  measurementId: "G-R5K9WJ1S6P",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default function Home() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <OurServics />
      <HomePhoneSection />
      <HomeLaptopSection />
      <HomeTablet />
      <InfoSection />
      <Footer />
    </>
  );
}
