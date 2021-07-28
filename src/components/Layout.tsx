import Head from "next/head";
import Navigation from "./Navigation";

import { Navbar } from "components";

import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Navbar
        logo="Wrestling Insight"
        menuItems={[
          <Link href="/posts">posts</Link>,
          <Link href="/">about</Link>,
        ]}
      />
      <main>
        {children}
        <style jsx>{`
          main {
            margin-top: 30px;
          }
        `}</style>
      </main>
    </div>
  );
}
