import Head from "next/head";
import Navigation from "./Navigation";

import { Navbar, Footer, Container } from "components";

import Link from "next/link";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Router from "next/router";

import classes from "./Layout.module.css";

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url} ...`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="root" className={classes.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Navbar/>
      <div className={classes.wrapper}>
        <Container>
          <main className={classes.main}>{children}</main>
        </Container>
      </div>
      <Footer />
      <style jsx>{`
        main {
          margin: 30px 0;
        }
        .wrapper {
          flex: 1;
        }
        .root {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
