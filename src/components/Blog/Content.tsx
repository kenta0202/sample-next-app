import Link from "next/link";
import React from "react";
import { Blog as TBlog } from "types/Blog";
import Img from "next/image";
import { ClockIcon, TagIcon } from "@heroicons/react/outline";
import dayjs from "dayjs";
import "dayjs/locale/ja";

type Props = {
  blog: TBlog;
};

export const Content: React.VFC<Props> = ({ blog }: Props) => {
  console.dir(blog);

  // 日付の設定
  dayjs.locale("ja");
  const BlogDate = dayjs(blog.publishedAt).format("YYYY-MM-DD (ddd)");

  return (
    <div key={blog.id} className="fadeup">
      <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
        <a>
          <div className="mx-auto max-w-xs border-b border-[#a1a7ab] dark:border-whitegrey">
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
                    src="https://source.unsplash.com/weekly?dog"
                    alt=""
                    width="80px"
                    height="80px"
                    className="rounded-md"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2   ">
                <li className="font-semibold text-left whitespace-nowrap">
                  <span className="hover:border-b-[1px]">{blog.title}</span>
                </li>
                <li className="flex flex-row gap-1 text-xs text-left">
                  <ClockIcon className="h-4" />
                  <div>{BlogDate}</div>
                </li>
                <li className="flex flex-row gap-1 text-xs text-center">
                  <TagIcon className="mt-1 h-4" />
                  <div className="flex justify-center items-center py-[2px] px-[2px] font-normal rounded-xl border-darkgrey dark:border-whitegrey">
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
