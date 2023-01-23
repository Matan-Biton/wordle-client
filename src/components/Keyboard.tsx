import { colorMap } from "../constsAndTypes";
import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Keyboard() {
  const { keyboard } = useContext(wordleContext);

  return (
    <div id="keyboard" className="flex flex-col gap-2 mb-10">
      {keyboard.map((row, i) => (
        <div key={i} className="flex gap-2 justify-center">
          {row.map((keyObj, i) => (
            <button
              key={i}
              className={
                `border-yellow-700 min-w-[2em] border-2 rounded-md ${colorMap.get(
                  keyObj.status
                )}` /* +
                "hover:opacity-60" */
              }
              value={keyObj.char}
              // onClick={() => keyPassed(key)}
            >
              {keyObj.char}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
