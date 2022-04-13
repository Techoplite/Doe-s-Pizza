import Head from "next/head";
import styles from "../styles/Home.module.css";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doe&apos;s Pizza</title>
        <meta
          name="description"
          content="Order pizzas or book a table with Doe's PIzza"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Section
          styleName={styles.sectionLanding}
          overlayName={styles.overlayLanding}
        ></Section>
      </main>
    </div>
  );
}
