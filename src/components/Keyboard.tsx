import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Keyboard() {
  // const { keyPassed } = useContext(wordleContext);

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div id="keyboard" className="flex flex-col gap-2 mb-10">
      {rows.map((row, i) => (
        <div key={i} className="flex gap-2 justify-center">
          {row.map((key, i) => (
            <button
              key={i}
              className="border-yellow-700 border-2 rounded-md " //hover
              style={{ minWidth: "2em" }}
              value={key}
              // onClick={() => keyPassed(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
