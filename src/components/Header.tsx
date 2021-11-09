import React from "react";
import { Darkmode } from "./DarkmodeButton";
import { HeaderItem } from "./HeaderItem";
import {
  HomeIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";

export const Header = () => {
  return (
    <>
      <header className="  flex sticky top-0 z-10 justify-between pb-2 bg-whitegrey dark:bg-darkgrey border-b-[1px] border-darkgrey dark:border-whitegrey">
        <div className=" ">
          <nav className="flex gap-2  ">
            <HeaderItem title="ホーム" Icon={HomeIcon} href="/" />
            <HeaderItem title="ブログ" Icon={BookOpenIcon} href="/blog" />
            <HeaderItem
              title="Practice"
              Icon={AcademicCapIcon}
              href="/practice"
            />
          </nav>
        </div>
        <div className="flex sm:flex-1 justify-end items-center pl-5 hover:opacity-75 w-12 md:w-20 lg:w-24 sm:w-16">
          <Darkmode />
        </div>
      </header>
    </>
  );
};
