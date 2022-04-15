import Head from "next/head";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import { useState } from "react";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
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
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Landing />
    </div>
  );
}
