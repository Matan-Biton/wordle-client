import { useContext, useRef, useState } from "react";
import BoardRow from "./BoardRow";

export function Board() {
  const [curAttempt, setCurAttempt] = useState(0)
  // const curAttempt = useRef(0)
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