import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Playground() {
  const { inputsGrid } = useContext(wordleContext);

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      {inputsGrid.map((row, attemptIdx) => (
        <form className="flex justify-center gap-2 md:gap-4" key={attemptIdx}>
          {row.map((char, charIdx) => (
            <input
              key={charIdx}
              type="text"
              className="tile text-center text-2xl font-bold border-2 border-gray-400 rounded-md"
              value={char}
              style={{ width: "7vh", height: "7vh" }}
              readOnly
            />
          ))}
        </form>
      ))}
    </div>
  );
}
