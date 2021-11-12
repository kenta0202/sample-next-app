/* eslint-disable @next/next/no-html-link-for-pages */
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeadInformation as Head } from "./HeadInformation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => (
  <div>
    <Head title={title} />
    {/* レスポンシブデザイン対応 */}

    <div className="flex flex-col w-screen h-screen divide-darkgrey dark:divide-whitegrey">
      <Header />
      <main className=" flex-1 px-[16px] ">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
