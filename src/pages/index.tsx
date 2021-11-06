import Link from "next/link";
import Layout from "../components/Layout";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { headInformation } from "data/headInformation";

import React from "react";

const head = headInformation.top;

const IndexPage: React.VFC = () => {
  {
    console.log(process.env.NEXT_PUBLIC_FOO);
    console.log(process.env.FOO);
  }
  return (
    <Layout title={head.title} metaDescription={head.metaDescription}>
      <br />
      <div className="container mx-auto">
        <span id="test">
          次のページ
          <ChevronRightIcon className=" inline w-3 h-3 align-middle translate-x-0.5 -translate-y-0.5" />
        </span>
        <br />
        <div>
          <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
            <a>queryをおくる</a>
          </Link>
        </div>
        <br />
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi,
          consectetur corporis fuga debitis repellat ab ipsa laborum odio iste
          tempora cupiditate necessitatibus ut possimus dolores rerum vero.
          Iusto, obcaecati!
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
