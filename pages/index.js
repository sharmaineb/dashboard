import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";


export default function Home() {
  return (
    <>
      <Head>
        <title>Shar's Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-zinc-900 min-h-screen'>
        <Header />
        <Dashboard />

      </main>
    </>
  );
}