import { board } from "../constantsAndTypes";
import { Attempt } from "./attempt";
import React from "react";

interface IProps {
  board: board;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>, guessIndex: number, charIndex: number) => void;
}

export function Board(props: IProps): React.ReactElement {
  const { board, inputHandler } = props;

  return (
    <div className="flex flex-col gap-2">
      {board.map((row, attemptIdx) => (
        <Attempt attempt={row} attemptIdx={attemptIdx} inputHandler={inputHandler} key={attemptIdx} />
      ))}
    </div>
  );
}
