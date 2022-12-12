import { useState } from "react";

export function useWordleUI() {
  const answer = "MATAN";

  const [curAttempt, setCurAttempt] = useState<number>(0);
  const [inputsGrid, setInputGrid] = useState < string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function firstEmpty() {
    return inputsGrid[curAttempt].indexOf("");
  }

  function keyPassed(key: string) {
    if (key === "Enter") {
      return;
      //TODO check attempt and next check last char in attempt
    } else if (key === "Backspace") {
      deleteLastChar();
    } else if (validChars.includes(key)) {
      addChar(key);
    }
  }

  function addChar(char: string) {
    const newGrid = [...inputsGrid];
    newGrid[curAttempt][firstEmpty()] = char;
    setInputGrid(newGrid);
  }

  function deleteLastChar() {
    if (firstEmpty() === 0) {
      return;
    }
    const positionToErase = firstEmpty() === -1 ? 5 : firstEmpty();
    const newGrid = [...inputsGrid];
    newGrid[curAttempt][positionToErase - 1] = "";
    setInputGrid(newGrid);
  }

  return {
    answer,
    curAttempt,
    inputsGrid,
    validChars,
    firstEmpty,
    keyPassed,
    addChar,
    deleteLastChar,
  };
}
