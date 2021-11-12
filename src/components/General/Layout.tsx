/* eslint-disable @next/next/no-html-link-for-pages */
import React, { ReactNode } from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SITE_NAME } from "utils/Blog/constants";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>{SITE_NAME}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* レスポンシブデザイン対応 */}
    </Head>
    <div className="flex flex-col w-screen h-screen divide-darkgrey dark:divide-whitegrey">
      <Header />
      <main className=" flex-1 px-[16px] ">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
