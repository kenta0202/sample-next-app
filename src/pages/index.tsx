/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/General/Layout";
import { headInformation } from "data/headInformation";
// import Img from "next/image";
import React from "react";
import { Tabs } from "components/HeadlessUI/Tabs";
import { Transition } from "components/HeadlessUI/Transition";
import { Container } from "components/Sample/Container";
import Switch from "components/HeadlessUI/Switch";
import { RadioGroup } from "components/HeadlessUI/RadioGroup";
import { Popover } from "components/HeadlessUI/Popover";
import { Menu } from "components/HeadlessUI/Menu";
import { ListBox } from "components/HeadlessUI/ListBox";
import { Disclosure } from "components/HeadlessUI/Disclosure";
import { Dialog } from "components/HeadlessUI/Dialog";

const head = headInformation.top;

const IndexPage: React.VFC = () => {
  {
    console.log(process.env.NEXT_PUBLIC_FOO);
    console.log(process.env.FOO);
  }
  return (
    <Layout title={head.title} metaDescription={head.metaDescription}>
      {/* <ListBox2 /> */}
      {/* HeadlessUIサンプル */}
      <Container title="#Tabs" component={<Tabs />} />
      <Container title="#Transition" component={<Transition />} />
      <Container title="#Switch" component={<Switch />} />
      <Container title="#RadioGroup" component={<RadioGroup />} />
      <Container title="#Popover" component={<Popover />} />
      <br />
      <br />
      <Container title="#Menu" component={<Menu />} />
      <Container title="#ListBox" component={<ListBox />} />
      <Container title="#Disclosure" component={<Disclosure />} />
      <Container title="#Dialog" component={<Dialog />} />

      <br />
      {/* イメージマップ */}
      {/* <Img
        src="https://placehold.it/350x150"
        alt="サンプル"
        useMap="#primary"
        width="350px"
        height="150px"
      />
      <map name="primary">
        <area shape="circle" coords="75,75,75" href="left.html" />
        <area shape="circle" coords="275,75,75" href="right.html" />
      </map> */}

      <div>
        <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
          <a>queryをおくる</a>
        </Link>
      </div>
      <details>
        <summary>HTMLとは</summary>
        <p>HTMLはマークアップ言語の1つです。</p>
        <p>次のような特徴を持ちます。</p>
        <ul>
          <li>Webページを表現する</li>
          <li>WHATWGにより仕様策定</li>
        </ul>
      </details>
    </Layout>
  );
};

export default IndexPage;
