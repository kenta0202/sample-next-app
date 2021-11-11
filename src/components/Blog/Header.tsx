import React from "react";
import { Darkmode } from "components/General/DarkmodeButton";

export const Header = () => {
  return (
    <>
      <header className="  flex sticky top-0 z-10 justify-between pb-2 bg-whitegrey dark:bg-darkgrey border-b-[1px] border-[#a1a7ab] dark:border-whitegrey">
        <div className=" ">
          <nav className="flex gap-2  "></nav>
        </div>
        <div className="flex justify-end items-center pl-5 mr-3 w-12 sm:w-16 md:w-20 lg:w-24 hover:opacity-75">
          <Darkmode />
        </div>
      </header>
    </>
  );
};
