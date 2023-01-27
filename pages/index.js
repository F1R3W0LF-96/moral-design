import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/components/heroSection/HeroSection";
import Header from "@/components/header/Header";
import AboutTeam from "@/components/aboutTeam/AboutTeam";
import Footer from "@/components/footer/Footer";
import Services from "@/components/services/Services";
import CallToAction from "@/components/callToAction/CallToAction";
import Pricing from "@/components/pricing/Pricing";
import AboutUs from "@/components/aboutus/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Moral Design</title>
        <meta
          name="description"
          content="Moral Design Software Development Company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <HeroSection />
      <Services />
      <CallToAction />
      <Pricing />
      <AboutTeam />
      <AboutUs />
      <Footer />
    </>
  );
}
