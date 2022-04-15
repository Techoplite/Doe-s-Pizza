import Head from "next/head";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";
import PopularPizzas from "./components/PopularPizzas";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollDown, setScrollDown] = useState(false)
  useEffect(() =>
    // On page refresh should reset to top
    window.scrollTo({ top: 0 }), []
  )
  useEffect(() => {
    if (scrollDown == true) {
      const height = screen.height
      window.scrollTo({ top: height, behavior: 'smooth' })
    }
    setScrollDown(false)
  }, [scrollDown])

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
      <Landing setScrollDown={setScrollDown} />
      <div>
        <PopularPizzas />
      </div>
    </div >
  );
}
