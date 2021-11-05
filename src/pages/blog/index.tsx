/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import Layout from "components/Layout";
import { blog as client } from "lib/HeadlessCMS/blog";
import { GetStaticProps } from "next";
import { Blog as TBlog } from "types/Blog";
import { BlogArea } from "components/Blog/BlogArea";

type Props = {
  blogs: TBlog[];
};

const aaa: React.VFC<Props> = ({ blogs }: Props) => {
  // {
  //   console.log({ blogs });
  // }
  return (
    <Layout>
      <BlogArea blogs={blogs} />
    </Layout>
  );
};

export default aaa;

export const getStaticProps: GetStaticProps = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await client.get({
    endpoint: "blog",
    queries: { depth: 1 },
  });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { props: { blogs: data.contents } };
};
