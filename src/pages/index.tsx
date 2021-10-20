import { Darkmode } from "components/Darkmode";
import Link from "next/link";
import Layout from "../components/Layout";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Contact from "components/contact";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Darkmode />
    <p>
      <span>
        次のページへ
        <ChevronRightIcon className="inline w-3 h-3 align-middle translate-x-0.5 -translate-y-0.5" />
      </span>
    </p>

    <h1>Hello!! Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p className=" text-red-500">Test</p>
    <Contact />
  </Layout>
);

export default IndexPage;
