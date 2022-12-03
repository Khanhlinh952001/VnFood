import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Heart from "./heart";
import Heart1 from "./Heart1";
import Main0 from "./mainn";
import Main1 from "./main1";
import Main2 from "./main2";
import Footer from "./footer";
// import the icons you need

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>VN FOOD NOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-100vh">
        {/* <Heart/> */}
        <Heart1/>
        <Main0/>
        <Main1 />
        <Main2 />
        
      </main>

      <footer><Footer/></footer>
    </div>
  );
};

export default Home;
