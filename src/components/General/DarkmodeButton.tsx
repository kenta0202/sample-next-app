import React from "react";
import { useState } from "react";
import { Switch as Swi } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

export const Darkmode = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const chageMode = () => {
    setEnabled(!enabled);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Swi
      checked={enabled}
      onChange={chageMode}
      className={`${enabled ? " bg-blue-300" : "bg-[#e9811b]"}
      h-[30px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-300`}
    >
      <div className="flex flex-row gap-2 items-center">
        <SunIcon className="pt-[0.5px] pl-[1px]" height={"23"} width={"23"} />
        <MoonIcon className="text-darkgrey  " height={"23"} width={"23"} />
      </div>

      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-[-14.5px]" : "translate-x-[15px]"}
         top-[-22px] relative pointer-events-none inline-block h-[25px] w-[25px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200  items-center`}
      />
    </Swi>
  );
};
