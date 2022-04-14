import Head from "next/head";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doe&apos;s Pizza</title>
        <meta
          name="description"
          content="Order pizzas or book a table with Doe's PIzza"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />
    </div>
  );
}
