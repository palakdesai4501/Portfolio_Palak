import type { NextPage } from "next";
import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div>
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
