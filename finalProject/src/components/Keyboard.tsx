import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Keyboard() {
  const { keyPassed } = useContext(wordleContext);

  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];
  return (
    <div className="keyboard">
      {rows.map((row, i) => (
        <div key={`keyBoardLine${i + 1}`} className="line">
          {row.map((key) => (
            <button key={key} className="key" value={key} onClick={() => keyPassed(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
