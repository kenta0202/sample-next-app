import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Blog as TBlog } from "types/Blog";

type Props = {
  blogs: TBlog[];
};

export const ChangePageArea: React.VFC<Props> = ({ blogs }: Props) => {
  console.dir(blogs);
  // クエリ文字列を取得
  const router = useRouter();
  const query_pageNumber = parseInt(router.query.page as string);
  console.log(query_pageNumber);
  const [pageNumber, setpageNumber] = useState<number>(1);

  const nextPage = () => {
    pageNumber <= blogs.length / 4 && setpageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    pageNumber > 1 && setpageNumber(pageNumber - 1);
  };
  const newblogs = query_pageNumber
    ? blogs.slice((query_pageNumber - 1) * 4, query_pageNumber * 4)
    : blogs.slice(0, 4);

  console.log(query_pageNumber);
  console.log(newblogs);

  return (
    <>
      <button
        onClick={() => {
          prevPage();
        }}
      >
        <Link href={{ query: { page: pageNumber } }}>
          <a>前のページ</a>
        </Link>
      </button>
      <button onClick={() => nextPage()}>
        <Link href={{ query: { page: pageNumber } }}>
          <a>次のページ</a>
        </Link>
      </button>
    </>
  );
};
