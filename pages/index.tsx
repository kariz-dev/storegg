import Head from "next/head";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import MainBanner from "../components/organisms/MainBanner";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reahced";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
