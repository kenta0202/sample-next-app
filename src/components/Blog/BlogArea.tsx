/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { Blog as TBlog } from "types/Blog";
import { Content } from "./Content";
import { useRouter } from "next/router";
import { Category } from "./Category";
import { ChangePageArea } from "./ChangePageArea";

type Props = {
  blogs: TBlog[];
};

export const BlogArea: React.VFC<Props> = ({ blogs }: Props) => {
  // クエリ文字列を取得
  const router = useRouter();
  const query_category = router.query.category as string;
  const query_pageNumber = parseInt(router.query.page as string);
  const ContentsPerPage = 8;

  // カテゴリを取得
  const category = [
    ...new Set(blogs.map(({ category }) => category).flat()),
  ] as string[];

  // クエリパラメータによって表示するコンテンツを変える(8個ずつ)
  const newblogs = query_pageNumber
    ? blogs.slice(
        (query_pageNumber - 1) * ContentsPerPage,
        query_pageNumber * ContentsPerPage
      )
    : blogs.slice(0, ContentsPerPage);

  return (
    <>
      <Category category={category} page={query_pageNumber} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 text-center">
        {newblogs.map((blog) => {
          if (!query_category || query_category == "All") {
            return <Content blog={blog} key={blog.id} />;
          } else
            return (
              query_category == blog.category && (
                <Content blog={blog} key={blog.id} />
              )
            );
        })}
      </div>
      <ChangePageArea blogs={blogs} />
    </>
  );
};
