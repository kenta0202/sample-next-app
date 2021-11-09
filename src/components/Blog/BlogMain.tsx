import Link from "next/link";
import React from "react";
import { Blog as TBlog } from "types/Blog";
import Img from "next/image";
import { ClockIcon, TagIcon } from "@heroicons/react/outline";

type Props = {
  blog: TBlog;
};

export const BlogMain: React.VFC<Props> = ({ blog }: Props) => {
  // console.dir(blog);
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
    <div key={blog.id} className="container">
      <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
        <a>
          <div className="mx-auto max-w-xs border-b border-darkgrey dark:border-whitegrey">
            <ul className="flex flex-row gap-3 justify-start items-start p-1 pb-2 hover:bg-whitegreyafter dark:hover:bg-darkgreyafter rounded-md">
              <div className=" ">
                {blog.image ? (
                  <Img
                    className="rounded-lg"
                    src={blog.image.url}
                    alt=""
                    width="80px"
                    height="80px"
                  />
                ) : (
                  <Img
                    src="https://source.unsplash.com/weekly?cat"
                    alt=""
                    width="80px"
                    height="80px"
                    className="rounded-lg"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2   ">
                <li className="text-lg font-semibold text-left">
                  <span className="hover:border-b-[1px]">{blog.title}</span>
                </li>
                <li className="flex flex-row gap-1 text-xs text-left">
                  <ClockIcon className="h-4" />
                  <div>{BlogDate}</div>
                </li>
                <li className="flex flex-row gap-1 text-xs text-center">
                  <TagIcon className="mt-1 h-4" />
                  <div className=" px-2 rounded-md border-[1px] hover:border-b-[1px] border-darkgrey dark:border-whitegrey">
                    {blog.category}
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </a>
      </Link>
    </div>
  );
};
