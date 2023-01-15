import { useContext, useRef, useState } from "react";
// import { wordleContext } from "../providers/wordleContext";
import BoardRow from "./BoardRow";

export function Board() {
  const curAttempt = useRef(0)
  const nextAttempt = () => curAttempt.current++

  // const [currentStep, setCurrentStep] = useState(0);
  // const nextStep = () => {
  //   setCurrentStep((e) => e + 1);

  return (
    <div className="flex flex-col gap-2">
      {Array.from(Array(5)).map((_, attemptIdx) => (
        <BoardRow
          attemptIdx={attemptIdx}
          nextAttempt={nextAttempt}
          attemptNum={curAttempt.current}
          key={attemptIdx}
        />
      ))}
    </div>
  );
}