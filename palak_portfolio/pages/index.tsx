import type { NextPage } from "next";
import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
      <Head>
        <title>Palak's Portfolio</title>
      </Head>
      
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

    </div>
  );
}
