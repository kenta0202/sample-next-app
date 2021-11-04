import React from "react";
import { Link as Scroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";
export const Footer = () => {
  return (
    <footer>
      <div className="w-full text-gray-300 bg-darkgrey dark:border-t dark:border-whitegrey">
        <div className="flex flex-row items-center p-1 mt-2">
          <div className="flex-1 text-sm tracking-wide leading-8 text-center">
            Copyright © 2021 k-naito All Rights Reserved.
          </div>
          <Scroll
            className="group mr-2"
            to="#"
            smooth={true}
            duration={600}
            offset={-50}
          >
            <ChevronUpIcon className="w-8 sm:w-14 md:w-16 lg:w-24 group-hover:opacity-70 group-hover:scale-110 cursor-pointer" />
          </Scroll>
        </div>
      </div>
    </footer>
  );
};
