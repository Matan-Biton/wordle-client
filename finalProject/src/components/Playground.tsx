import { useId, useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Playground() {
  const wApi = useContext(wordleContext);
  const { inputsGrid } = wApi;

  return (
    <div className="grid">
      {inputsGrid.map((row) => (
        <div className="attempt">
          {row.map((char) => (
            <input key={useId()} type="text" className="tile" value={char} readOnly />
          ))}
        </div>
      ))}
    </div>
  );
}
