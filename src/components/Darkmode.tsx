import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export const Darkmode = () => {
  const { theme, setTheme } = useTheme();

  // レンダー後かを判定
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="p-3 w-12 h-12"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <>
          {theme === "dark" ? (
            <MoonIcon height={"25"} width={"25"} />
          ) : (
            <SunIcon height={"25"} width={"25"} />
          )}
        </>
      )}
    </button>
  );
};
