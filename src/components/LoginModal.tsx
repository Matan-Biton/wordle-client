import { useContext, useRef } from "react";
import { wordleContext } from "../providers/wordleContext";

export function LoginModal() {
  const { userName, passNewName } = useContext(wordleContext);

  const inputRef = useRef(null);

  return (
    <div className="p-10 w-screen h-screen absolute flex flex-col justify-center items-center gap-16 z-10 bg-gray-500/90">
      <input type="text" ref={inputRef} placeholder={`Current: ${userName}`} />
      <button
        className="p-2 h-fit bg-gray-500 rounded-md border-2 border-black hover:bg-gray-600"
        onClick={() => {
          passNewName(inputRef);
        }}
      >
        SEND
      </button>
    </div>
  );
}
