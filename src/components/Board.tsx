import { useContext } from "react";
import { colorMap } from "../constsAndTypes";
import { wordleContext } from "../providers/wordleContext";

export function Board() {
  const { board, handleInputChange } = useContext(wordleContext);

  const validation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    !e.key.match(/^[a-z]$/i) && e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-2">
      {board.map((row, guessIndex) => (
        <div className="flex justify-center gap-2" key={guessIndex}>
          {row.map((tile, charIndex) => (
            <input
              key={charIndex}
              type="text"
              className={`tile text-center text-2xl font-bold uppercase border-2 border-gray-400 rounded-md w-[7vh] h-[7vh] ${colorMap.get(
                tile.status
              )} cursor-pointer disabled:cursor-not-allowed`}
              value={tile.char}
              maxLength={1}
              onKeyDown={validation}
              onChange={(e) => handleInputChange(e, guessIndex, charIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
