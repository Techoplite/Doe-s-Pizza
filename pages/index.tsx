import Head from "next/head";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import PopularPizzas from "./components/PopularPizzas";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useAppDispatch } from "./redux/hooks";
import { setNavBackground } from './redux/navBackground/navBackgroundSlice'



export default function Home() {
  const [scrollDown, setScrollDown] = useState(false)
  const dispatch = useAppDispatch()
  const handleScroll = () => {
    window.scrollY === 0 ? dispatch(setNavBackground(false)) : dispatch(setNavBackground(true))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
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
    <>
      <Head>
        <title>Doe&apos;s Pizza</title>
        <meta
          name="description"
          content="Order pizzas or book a table with Doe's PIzza"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing setScrollDown={setScrollDown} />
      <PopularPizzas />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
