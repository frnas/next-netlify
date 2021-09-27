import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useMedia } from "react-use";
import Box from "ui-box";
import { FullPage } from "../components/FullPage";
import { Waves } from "../components/Waves";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const isMobile = useMedia("(max-width: 991.98px)");

  return (
    <div className={styles.container}>
      <Head>
        <title>Dev Row - Results oriented webapps</title>
        <meta name="description" content="Results oriented webapps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FullPage>
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingBottom="70px"
            backgroundColor="#355070"
          >
            <Box>
              <Fade duration={1500}>
                <Image
                  src="/logo.svg"
                  width={isMobile ? 200 : 300}
                  height={isMobile ? 200 : 300}
                />
              </Fade>
            </Box>
            <Box position="absolute" bottom={0} left={0} right={0}>
              <Waves />
            </Box>
          </Box>
        </FullPage>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
