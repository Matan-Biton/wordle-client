import React, { useState, useEffect, useRef } from "react";
interface atts {
  curAttemptNum: number;
  attemptIdx: number;
  nextAttempt: () => void;
}
export default function BoardRow({ curAttemptNum, attemptIdx, nextAttempt }: atts) {
  const isMounting = useRef(true);
  const isWordCompleted = useRef(false);
  const [attempt, setAttempt] = useState([
    { char: "", status: "" },
    { char: "", status: "" },
    { char: "", status: "" },
    { char: "", status: "" },
    { char: "", status: "" },
  ]);

  useEffect(() => {
    checkWord();
  }, [isWordCompleted.current]);

  const checkWord = async () => {
    if (isMounting.current) {
      isMounting.current = false;
      return
    }
    if (!isWordCompleted.current) return;
    const postOptions = (bodyContent: any) => {
      return {
        method: "post",
        body: JSON.stringify(bodyContent),
        headers: {
          "content-type": "application/json",
        },
      };
    };

    fetch("http://localhost:3001/check_word", postOptions(attempt))
      .then((res) => res.json())
      .then((body) => setAttempt(body.attempt));
    nextAttempt();
  };

  const handleWordUpdate = (charIdx: number, value: string) => {
    setAttempt((attempt) => {
      attempt[charIdx].char = value.toUpperCase();
      if (attempt.every((curCharObj) => curCharObj.char !== "")) {
        isWordCompleted.current = true;
      }
      return [...attempt];
    });
  };

  return (
    <div className="flex justify-center gap-2">
      {attempt.map((charObj, charIdx) => (
        <input
          key={charIdx}
          disabled={curAttemptNum !== attemptIdx}
          type="text"
          className={`tile text-center text-2xl font-bold border-2 border-gray-400 rounded-md w-[7vh] h-[7vh] ${charObj.status}`}
          value={charObj.char}
          maxLength={1}
          onChange={(e) => {
            handleWordUpdate(charIdx, e.target.value);
          }}
        />
      ))}
    </div>
  );
}
