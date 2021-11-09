/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { Blog as TBlog } from "types/Blog";
import { BlogMain } from "./BlogMain";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  blogs: TBlog[];
};

export const BlogArea: React.VFC<Props> = ({ blogs }: Props) => {
  console.dir(blogs);
  // クエリ文字列を取得
  const router = useRouter();
  const query = router.query.category as string;

  const category = [...new Set(blogs.map(({ category }) => category).flat())];
  return (
    <>
      <nav className="container flex justify-start mt-8">
        <ul className="flex flex-row gap-6 ">
          {category.map((v) => (
            <li
              key={v}
              className="px-2 rounded-md border-[1px] border-darkgrey dark:border-whitegrey hover:opacity-70"
            >
              <Link href={{ query: { category: v } }}>
                <a>{v}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 text-center">
        {blogs.map((blog) => {
          if (!query) {
            return <BlogMain blog={blog} key={blog.id} />;
          } else
            return (
              query == blog.category && <BlogMain blog={blog} key={blog.id} />
            );
        })}
      </div>
    </>
  );
};
