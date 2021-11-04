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
      <header className="flex sticky top-0 justify-between mb-2 bg-whitegrey dark:bg-darkgrey">
        <div className="">
          <nav className="flex gap-2 justify-evenly items-center">
            <HeaderItem title="Top" Icon={HomeIcon} href="/" />
            <HeaderItem title="Blog" Icon={BookOpenIcon} href="/blog" />
            <HeaderItem
              title="Practice"
              Icon={AcademicCapIcon}
              href="/practice"
            />
          </nav>
        </div>
        <div className="flex justify-center items-center sm:w-16 md:w-20 lg:w-24 hover:opacity-75">
          <Darkmode />
        </div>
      </header>
    </>
  );
};
