/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import Layout from "components/General/Layout";
import { blog as client } from "lib/HeadlessCMS/blog";
import { GetServerSideProps, GetStaticProps } from "next";
import { Blog as TBlog } from "types/Blog";
import { BlogArea } from "components/Blog/BlogArea";

/*
http://taso.blog.jp/archives/12241577.html
カテゴリ別表示
月別アーカイブ別表示
最新記事を表示
記事検索

*/
type Props = {
  blogs: TBlog[];
};

const index: React.VFC<Props> = ({ blogs }: Props) => {
  return (
    <Layout title={"KNT.BLOG"}>
      <BlogArea blogs={blogs} />
    </Layout>
  );
};

export default index;

// export const getStaticProps: GetStaticProps = async () => {
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { depth: 1 },
  });
  return { props: { blogs: data.contents } };
};
