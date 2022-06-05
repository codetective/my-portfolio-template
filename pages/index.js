import { Container } from "@chakra-ui/react";
import Head from "next/head";
import data from "../data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <Container maxWidth="container.xl" px={[5, 8]} mx="auto">
      <Head>
        <title>{data.sitename}</title>
        <meta
          name="description"
          content={data.description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
