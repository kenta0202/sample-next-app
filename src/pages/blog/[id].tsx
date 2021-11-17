/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { GetStaticPaths, GetServerSideProps } from "next";
import Layout from "components/General/Layout";
import { blog as client } from "lib/HeadlessCMS/blog";
import { Blog } from "types/Blog";

type Props = {
  blog: Blog;
};
const id: React.VFC<Props> = ({ blog }: Props) => {
  return (
    <Layout>
      <p>{blog.category}</p>
    </Layout>
  );
};

export default id;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({
    endpoint: "blog",
    queries: { depth: 1 },
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const blogs: Blog[] = data.contents;

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};
// ↑から受け取る
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id;

    const data = await client.get({
      endpoint: "blog",
      queries: { depth: 1 },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const blogs: Blog[] = data.contents;
    const blog = blogs.find((blog) => blog.id === id);
    return { props: { blog } };
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return { props: { errors: err.message } };
  }
};
