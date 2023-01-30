import React from "react";
import { attempt, colorMap } from "../constantsAndTypes";

interface IProps {
  attempt: attempt;
  attemptIdx: number;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>, guessIndex: number, charIndex: number) => void;
}

export function Attempt(props: IProps) {
  const { attempt, attemptIdx, inputHandler } = props;

  const validation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    !e.key.match(/^[a-z]$/i) && e.preventDefault();
  };

  return (
    <div className="flex justify-center gap-2" key={attemptIdx}>
      {attempt.map((tile, charIndex) => (
        <input
          key={charIndex}
          type="text"
          className={`tile text-center text-2xl font-bold uppercase border-2 border-gray-400 rounded-md w-[7vh] h-[7vh] ${colorMap.get(
            tile.status
          )} cursor-pointer disabled:cursor-not-allowed`}
          value={tile.char}
          maxLength={1}
          onKeyDown={validation}
          onChange={(e) => inputHandler(e, attemptIdx, charIndex)}
        />
      ))}
    </div>
  );
}
