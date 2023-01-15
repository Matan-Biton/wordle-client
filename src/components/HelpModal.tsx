import React, { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export default function HelpModal() {
  const { isHelpOpen, setIsHelpOpen } = useContext(wordleContext);

  return (
    <div className={`flex justify-between p-10 w-screen h-screen absolute z-10 bg-gray-300 ${isHelpOpen ? '' : 'hidden'}`}>
      HelpModal
      <button
        className="p-2 h-fit bg-gray-500 rounded-md border-2 border-black hover:bg-gray-600"
        onClick={() => {setIsHelpOpen(false)}}
      >
        Dismiss
      </button>
    </div>
  );
}
