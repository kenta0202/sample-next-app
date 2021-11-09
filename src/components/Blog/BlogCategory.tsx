import Link from "next/link";
import React from "react";

type Props = {
  category: string[];
};

export const BlogCategory: React.VFC<Props> = ({ category }: Props) => {
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
    </>
  );
};
