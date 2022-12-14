import { useId, useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Playground() {
  const {inputsGrid} = useContext(wordleContext);

  return (
    <div className="grid">
      {inputsGrid.map((row, i) => (
        <form className="attempt" key={i} id={`${i + 1}`}>
          {row.map((char) => (
            <input key={useId()} type="text" className="tile" value={char} readOnly />
          ))}
        </form>
      ))}
    </div>
  );
}
