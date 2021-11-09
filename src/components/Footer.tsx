import React from "react";
import { Link as Scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";
export const Footer = () => {
  return (
    <>
      <div className="" id="topBtn">
        <Scroll
          className="group fixed right-1 bottom-2 mr-2 cursor-pointer"
          to="#"
          smooth={true}
          duration={600}
          offset={-50}
        >
          <ChevronUpIcon className="group-hover:opacity-70 group-hover:scale-110 cursor-pointer w-8 sm:w-14 md:w-16 lg:w-24" />
        </Scroll>
      </div>

      <footer>
        <div className="flex items-center mt-8 text-gray-300 bg-darkgrey dark:border-t dark:border-whitegrey w-full">
          <small className="flex-1 p-2 text-sm tracking-wide leading-8 text-center">
            Copyright © 2021 k-naito All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  );
};
