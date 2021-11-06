/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import { Blog as TBlog } from "types/Blog";
import { Blog } from "./Blog";

type Props = {
  blogs: TBlog[];
};

export const BlogArea: React.VFC<Props> = ({ blogs }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 text-center">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog.id} />
      ))}
    </div>
  );
};
