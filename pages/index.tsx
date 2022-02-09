import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";

import Head from "next/head";
import Navbar from "../components/organisms/navbar/index";
import Hero from "../components/organisms/hero/index";
import TransactionStep from "../components/organisms/transaction-step/index";
import FeaturedGames from "../components/organisms/games/index";
import Reached from "../components/organisms/reached/index";
import Story from "../components/organisms/story/index";
import Footer from "../components/organisms/footer/index";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>StoreGG</title>
        <meta name="description" content="Website Top Up Game" />
        <meta property="og:title" content="StoreGG" />
        <meta property="og:description" content="Website Top Up Game" />
        <meta property="og:url" content="https:/storegg.com" />
      </Head>
      <Navbar />
      <Hero />
      <TransactionStep />
      <FeaturedGames />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
