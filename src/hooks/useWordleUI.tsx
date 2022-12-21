import { ChangeEvent, useState } from "react";

export function useWordleUI() {
  const [answer, setAnswer] = useState('MATAN');

  const [curAttempt, setCurAttempt] = useState<number>(0);
  const [inputsGrid, setInputGrid] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  function firstEmpty() {
    return inputsGrid[curAttempt].indexOf("");
  }

  function keyPassed(key: string) {
    if (key.match(/^[a-zA-Z]$/)) {
    const newGrid = [...inputsGrid];
    newGrid[curAttempt][firstEmpty()] = key;
    setInputGrid(newGrid);
    }
  }

  function checkWord(event: ChangeEvent) {
  }

  // function deleteLastChar() {
  //   if (firstEmpty() === 0) {
  //     return;
  //   }
  //   const positionToErase = firstEmpty() === -1 ? 5 : firstEmpty();
  //   const newGrid = [...inputsGrid];
  //   newGrid[curAttempt][positionToErase - 1] = "";
  //   setInputGrid(newGrid);
  // }

  return {
    answer,
    curAttempt,
    inputsGrid,
    firstEmpty,
    keyPassed,
    // checkWord,
    // deleteLastChar,
  };
}
