import React from "react";
import { CloudIcon } from "@heroicons/react/outline";

export default function AppHeader() {
  return (
    <div id="header">
      <header className="h-14 bg-blue-800 flex justify-center">
        <CloudIcon className="w-10 h-10 mr-1 self-center text-white" />
        <span className="font-serif self-center text-white text-bold text-xl">
          Cloud Notes
        </span>
      </header>
    </div>
  );
}
