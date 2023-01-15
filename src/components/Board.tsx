import { useContext, useRef, useState } from "react";
import BoardRow from "./BoardRow";

export function Board() {
  const curAttempt = useRef(0)
  const nextAttempt = () => curAttempt.current++

  return (
    <div className="flex flex-col gap-2">
      {Array.from(Array(5)).map((_, attemptIdx) => (
        <BoardRow
          attemptIdx={attemptIdx}
          nextAttempt={nextAttempt}
          curAttemptNum={curAttempt.current}
          key={attemptIdx}
        />
      ))}
    </div>
  );
}