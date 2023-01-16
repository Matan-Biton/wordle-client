import { useState } from "react";
import BoardRow from "./BoardRow";

export function Board() {
  const [curAttempt, setCurAttempt] = useState(0);

  function lossAchieved() {
    alert("loss achieved");
    setCurAttempt(0)
  }

  // const curAttempt = useRef(0)
  // const nextAttempt = () => curAttempt.current++

  return (
    <div className="flex flex-col gap-2">
      {Array.from(Array(5)).map((_, attemptIdx) => (
        <BoardRow
          attemptIdx={attemptIdx}
          nextAttempt={() => {
            curAttempt === 4 ? lossAchieved() : setCurAttempt(curAttempt + 1);
          }}
          curAttemptNum={curAttempt}
          key={attemptIdx}
        />
      ))}
    </div>
  );
}
