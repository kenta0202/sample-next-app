import { useRouter } from "next/router";
import React, { useState } from "react";
import { Blog as TBlog } from "types/Blog";

type Props = {
  blogs: TBlog[];
};

export const ChangePageArea: React.VFC<Props> = ({ blogs }: Props) => {
  console.dir(blogs);
  //1ページに表示するコンテンツの数
  const ContentsPerPage = 8;
  // クエリ文字列を取得
  const router = useRouter();
  const query_pageNumber = parseInt(router.query.page as string);
  console.log(query_pageNumber);
  const [pageNumber, setpageNumber] = useState<number>(1);
  console.log(pageNumber);
  const nextPage = () => {
    if (pageNumber <= blogs.length / ContentsPerPage) {
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
  const newblogs = query_pageNumber
    ? blogs.slice(
        (query_pageNumber - 1) * ContentsPerPage,
        query_pageNumber * ContentsPerPage
      )
    : blogs.slice(0, ContentsPerPage);

  console.log(query_pageNumber);
  console.log(newblogs);

  return (
    <div className="flex flex-row justify-center mt-5 space-x-1">
      <button
        onClick={() => {
          prevPage();
        }}
        className="py-[2px] px-2 text-xs border-darkgrey hover:opacity-70"
      >
        <span className="mr-2">&lt;</span>前のページ
      </button>
      <button>
        <div className="flex justify-center items-center px-2   rounded-full border-[1px] border-darkgrey dark:border-whitegrey hover:opacity-70">
          {pageNumber}
        </div>
      </button>
      <button
        onClick={() => nextPage()}
        className="py-[2px] px-2 text-xs border-darkgrey hover:opacity-70"
      >
        次のページ <span className="ml-2">&gt;</span>
      </button>
    </div>
  );
};
