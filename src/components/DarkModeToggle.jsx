"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="w-12 h-6 border-2 border-green-700 rounded-4xl flex justify-between px-1 items-center relative"
      onClick={toggle}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className={`w-4 h-4 bg-blue-500 rounded-full absolute ${
          mode === "light" ? "left-[4px]" : "right-0.5"
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
