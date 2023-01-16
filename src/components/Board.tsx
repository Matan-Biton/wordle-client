import { useContext, useRef, useState } from "react";
import { wordleContext } from "../providers/wordleContext";
import { charObj } from "./types";
// import BoardRow from "./BoardRow";

export function Board() {
  const { activeElementIndex, board } = useContext(wordleContext);

  // console.log(board);

  const [curAttempt, setCurAttempt] = useState(0);
  // const nextAttempt = () => curAttempt.current++

  return (
    <div className="flex flex-col gap-2">
      {Array.from(Array(5)).map((_, attemptIdx) => (
        <BoardRow
          attemptIdx={attemptIdx}
          nextAttempt={() => setCurAttempt(cur => cur++)}
          curAttemptNum={curAttempt}
          key={attemptIdx}
        />
      ))}
    </div>
  );
}