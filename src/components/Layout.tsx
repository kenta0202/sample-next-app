/* eslint-disable @next/next/no-html-link-for-pages */
import React, { ReactNode } from "react";
// import Link from "next/link";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
  metaDescription?: string;
};

const Layout = ({
  children,
  title = "default title",
  metaDescription,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description " content={metaDescription} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="kenta0202" />
      <meta
        name="keywords"
        content="個人HP,個人ブログ,Next+TailindCssで作った"
      />
      <meta name="robots" content="noindex,nofollow" />
      <meta property="og:url" content=" ページの URL" />

      <meta property="og:type" content=" ページの種類" />

      <meta property="og:title" content=" ページの タイトル" />

      <meta property="og:description" content=" ページのディスクリプション" />

      <meta property="og:site_name" content="サイト名" />

      <meta property="og:image" content=" サムネイル画像の URL" />
    </Head>
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <main className=" flex-1">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
