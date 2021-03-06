import { useRouter } from "next/router";
import React, { useState } from "react";
import { Blog as TBlog } from "types/Blog";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
type Props = {
  blogs: TBlog[];
};

export const ChangePageArea: React.VFC<Props> = ({ blogs }: Props) => {
  //1ページに表示するコンテンツの数
  const ContentsPerPage = 8;
  // クエリ文字列を取得
  const router = useRouter();

  // ページ番号
  const [pageNumber, setpageNumber] = useState<number>(1);

  const nextPage = () => {
    if (pageNumber <= Math.floor(blogs.length / ContentsPerPage)) {
      setpageNumber(pageNumber + 1);
      void router.push({ query: { page: pageNumber + 1 } });
    }
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      setpageNumber(pageNumber - 1);
      void router.push({ query: { page: pageNumber - 1 } });
    }
  };

  return (
    <div className="flex flex-row justify-center mx-auto mt-8 space-x-1">
      {/* 前のページ */}
      <button
        onClick={() => {
          prevPage();
        }}
        className={`${
          pageNumber == 1 && "hidden"
        } py-[2px] px-2 text-sm sm:text-sm md:text-md lg:text-lg border-darkgrey hover:opacity-70 delay-1000`}
      >
        <ChevronDoubleLeftIcon className="ml-2 w-6 text-darkgrey " />
      </button>

      {/* ページ番号 */}
      <div className="flex justify-center items-center px-2 lg:px-[10px] w-8 font-semibold text-darkgrey bg-indigo-200 rounded-full border-darkgrey dark:border-whitegrey">
        {pageNumber}
      </div>

      {/* 次のページ */}
      <button
        onClick={() => nextPage()}
        className={`${
          pageNumber == 1 + Math.floor(blogs.length / ContentsPerPage) &&
          "hidden"
        }  py-[2px] px-2 text-sm sm:text-sm md:text-md lg:text-lg border-darkgrey hover:opacity-70 delay-1000`}
      >
        <ChevronDoubleRightIcon className="ml-2 w-6 text-darkgrey dark:text-whitegrey " />
      </button>
    </div>
  );
};
