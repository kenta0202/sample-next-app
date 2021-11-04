/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HeaderItem = ({ Icon, title, href }) => {
  return (
    <Link href={href}>
      <a>
        <div className="group flex flex-col items-center w-12 sm:w-16 md:w-20 lg:w-24 font-black hover:opacity-75">
          <Icon className=" mt-2 h-8 group-hover:animate-bounce " />
          <div className="">{title}</div>
        </div>
      </a>
    </Link>
  );
};