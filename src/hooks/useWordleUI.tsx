import { ChangeEvent, useEffect, useState } from "react";
import { wordsDB } from "../../wordsDB/configDB";

export function useWordleUI() {
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const SQL = "SELECT word FROM words ORDER BY RANDOM() LIMIT 1";
    const setRandWord = async () => {
      const randWord = await wordsDB.query(SQL);
      setAnswer(randWord.rows[0]);
    };

    setRandWord();
  }, []);

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

  // function checkWord(event: ChangeEvent) {
  // }

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
