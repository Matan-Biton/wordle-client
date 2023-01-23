import { useEffect, useState } from "react";
import { charObj, WORD_LENGTH, GUESSES, serverURL } from "../constsAndTypes";

export function useWordleUI() {
  class Game {
    keyboard: charObj[][];
    board: charObj[][];

    constructor() {
      this.keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"],
      ].map((row) =>
        row.map((letter) => {
          return { char: letter, status: "" } as charObj;
        })
      );

      this.board = Array.from(Array(GUESSES)).map((_) =>
        Array.from(Array(WORD_LENGTH)).map((_) => {
          return { char: "", status: "" } as charObj;
        })
      );
    }
  }

  const [keyboard, setKeyboard] = useState([[]] as charObj[][]);
  const [board, setBoard] = useState([[]] as charObj[][]);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [userName, setUserName] = useState("");

  async function checkWord(idx: number) {
    fetch(`${serverURL}${board[idx].map(Obj => Obj.char).join('')}`)
      .then((res) => res.json())
      .then((body) => {
        const newBoard = [...board]
        newBoard[idx].forEach((charObj, idx) => charObj.status = body.split('')[idx])
        setBoard(newBoard);
      });
  };


  useEffect(() => {
    setUserName("Guest");
  }, []);

  useEffect(() => {
    const newGame = new Game();
    setKeyboard(newGame.keyboard);
    setBoard(newGame.board);
  }, [userName]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    guessIndex: number,
    charIndex: number
  ) => {
    board[guessIndex][charIndex].char = e.target.value.toUpperCase();
    if (board[guessIndex].every((Obj) => Obj.char !== "")) {
      // setBoard([...board]);
      checkWord(guessIndex)
    } else {
      setBoard(board);
    }
  };

  const handleHelpModal = (setTo: boolean) => {
    setIsHelpOpen(setTo);
  };

  const passNewName = (ref: React.MutableRefObject<null>) => {
    if (!ref.current) return;
    setUserName(ref.current);
  };

  return {
    keyboard,
    board,
    handleInputChange,
    handleHelpModal,
    isHelpOpen,
    userName,
    passNewName,
  };
}
