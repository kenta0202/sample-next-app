/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { Blog as TBlog } from "types/Blog";
import { BlogMain } from "./BlogMain";
import { useRouter } from "next/router";
import { BlogCategory } from "./BlogCategory";
import { ChangePageArea } from "./ChangePageArea";

type Props = {
  blogs: TBlog[];
};

export const BlogArea: React.VFC<Props> = ({ blogs }: Props) => {
  console.dir(blogs);
  // クエリ文字列を取得
  const router = useRouter();
  const query_category = router.query.category as string;
  const query_pageNumber = parseInt(router.query.page as string);

  const category = [
    ...new Set(blogs.map(({ category }) => category).flat()),
  ] as string[];

  const newblogs = query_pageNumber
    ? blogs.slice((query_pageNumber - 1) * 4, query_pageNumber * 4)
    : blogs.slice(0, 4);

  return (
    <>
      <BlogCategory category={category} />
      <ChangePageArea blogs={blogs} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 text-center">
        {newblogs.map((blog) => {
          if (!query_category) {
            return <BlogMain blog={blog} key={blog.id} />;
          } else
            return (
              query_category == blog.category && (
                <BlogMain blog={blog} key={blog.id} />
              )
            );
        })}
      </div>
    </>
  );
};
