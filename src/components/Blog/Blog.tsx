import Link from "next/link";
import React from "react";
import { Blog as TBlog } from "types/Blog";
import Img from "next/image";

type Props = {
  blog: TBlog;
};

export const Blog: React.VFC<Props> = ({ blog }: Props) => {
  {
    const date = new Date(blog.publishedAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayofweek = date.getDay();
    const dayname = ["日", "月", "火", "水", "木", "金", "土"];
    // eslint-disable-next-line no-var
    var BlogDate = `${year}年${month}月${day}日(${dayname[dayofweek]})`;
  }
  return (
    <div key={blog.id} className="">
      <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
        <a>
          <ul className="flex flex-col gap-2">
            <li>
              <Img
                src="https://source.unsplash.com/user/erondu"
                alt=""
                width="100px"
                height="100px"
              />
            </li>
            <li className="text-sm">{BlogDate}</li>
            <li>
              <div className="">
                <span className="py-[2px] px-2 rounded-md border-[1px] hover:border-b-[1px]">
                  {blog.category}
                </span>
              </div>
            </li>
            <li className="text-lg font-semibold">
              <span className="hover:border-b-[1px]">{blog.title}</span>
            </li>
          </ul>
        </a>
      </Link>
    </div>
  );
};
