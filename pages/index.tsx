import Head from "next/head";
import Navbar from "./components/Navbar"
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import PopularPizzas from "./components/PopularPizzas";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setNavBackground } from '../redux/navBackground/navBackgroundSlice'
import { getPizzas } from "./api"
import { setPizzas } from "../redux/pizzas/pizzasSlice";
import ErrorBoundary from "./components/ErrorBoundary"
import { toggle } from "../redux/menu/menuSlice";

// TODO: Add page to inform the user that needs authorization to reach the given url

export default function Home(props) {
  const [scrollDown, setScrollDown] = useState(false)
  const dispatch = useAppDispatch()
  const section = useAppSelector(state => state.menu.section)
  const handleScroll = () => {
    // Toggles the navbar background if page has been scrolled down from top
    window.scrollY === 0 ? dispatch(setNavBackground(false)) : dispatch(setNavBackground(true))
  }
  useEffect(() => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [section, props, dispatch])
  useEffect(() => {
    dispatch(setPizzas(props.pizzas))
  }, [props.pizzas, dispatch])
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
      <ErrorBoundary>
        <Head>
          <title>Doe&apos;s Pizza</title>
          <meta
            name="description"
            content="Order pizzas or book a table with Doe's PIzza"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Navbar />
        <Landing />
        <PopularPizzas />
        <AboutUs />
        <ContactUs />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export async function getServerSideProps() {
  let pizzas = await getPizzas();
  return {
    props: {
      pizzas
    }
  }
}
