import { useContext, useRef } from "react";
import { wordleContext } from "../providers/wordleContext";

export default function HelpModal() {
  const { userName, passNewName } = useContext(wordleContext);

  const inputRef = useRef(null);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder={userName} />
      <button
        className="p-2 h-fit bg-gray-500 rounded-md border-2 border-black hover:bg-gray-600"
        onClick={() => {
          passNewName(inputRef);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
