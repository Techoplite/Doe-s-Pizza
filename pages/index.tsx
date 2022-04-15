import Head from "next/head";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import { useEffect, useRef, useState } from "react";
import PopularPizzas from "./components/PopularPizzas";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollDown, setScrollDown] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  const popularPizzas = useRef<null | HTMLDivElement>(null)
  useEffect(() => {
    if (scrollDown && popularPizzas.current && !firstRender) {
      popularPizzas.current.scrollIntoView({ behavior: "smooth" })
    } 
    setFirstRender(false)

    return () => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }, [scrollDown, firstRender])

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
      <div ref={popularPizzas}>
        <PopularPizzas />
      </div>
    </div >
  );
}
