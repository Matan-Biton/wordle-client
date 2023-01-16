import { useState, useEffect, useRef, useContext } from "react";
import { wordleContext } from "../providers/wordleContext";
import { serverURL, atts, colorMap, charObj } from "../types";

export default function BoardRow({ curAttemptNum, attemptIdx, nextAttempt }: atts) {
  const { setUsedLettersMap, usedLettersMap } = useContext(wordleContext);
  const curActiveChar = useRef(0);
  const isWordCompleted = useRef(false);
  const [attempt, setAttempt] = useState<charObj[]>([
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
    fetch(`${serverURL}check_word`, postOptions(attempt))
      .then((res) => res.json())
      .then((body) => {
        setAttempt(body.attempt);
        if (body.solved) winAchieved();
      });

    nextAttempt();
  };

  const handleWordUpdate = (charIdx: number, char: string) => {
    if (!char.match(/^[a-z]$/i)) return;
    setAttempt((attempt) => {
      attempt[charIdx].char = char.toUpperCase();
      if (attempt.every((curCharObj) => curCharObj.char !== "")) {
        isWordCompleted.current = true;
      }
      curActiveChar.current += 1;
      return [...attempt];
    });
  };

  function winAchieved() {
    alert("Well Done, You Have Won!!!");
    window.location.reload();
  }

  return (
    <div className="flex justify-center gap-2">
      {attempt.map((charObj, charIdx) => (
        <input
          key={charIdx}
          disabled={curAttemptNum !== attemptIdx}
          type="text"
          className={`tile text-center text-2xl font-bold border-2 border-gray-400 rounded-md w-[7vh] h-[7vh] ${colorMap.get(
            charObj.status
          )} cursor-pointer disabled:cursor-not-allowed`}
          value={charObj.char}
          autoFocus={charIdx === curActiveChar.current}
          maxLength={1}
          onChange={(e) => {
            handleWordUpdate(charIdx, e.target.value);
          }}
        />
      ))}
    </div>
  );
}
