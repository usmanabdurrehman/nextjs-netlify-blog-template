import Head from "next/head";

import { Navbar, Footer, Container } from "components";

import Link from "next/link";

// import NProgress from "nprogress";
// import "nprogress/nprogress.css";

// import Router from "next/router";

import classes from "./Layout.module.css";

// NProgress.configure({ showSpinner: false });
// Router.onRouteChangeStart = (url) => {
//   console.log(`Loading: ${url} ...`);
//   NProgress.start();
// };
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();

import {classNames} from 'utils'

type Props = {
  children: React.ReactNode;
  noContainer: boolean;
  noMargin:boolean;
};

export default function Layout({ children, noContainer, noMargin }: Props) {
  return (
    <div className={classes.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={classes.wrapper}>
        {noContainer ? (
          <main className={classNames({
             [classes.main]:!noMargin
          })}>{children}</main>
        ) : (
          <Container>
            <main className={classNames({
             [classes.main]:!noMargin
          })}>{children}</main>
          </Container>
        )}
      </div>
      <Footer />
    </div>
  );
}
