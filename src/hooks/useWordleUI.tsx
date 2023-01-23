import { useEffect, useState } from "react";
import { charObj, WORD_LENGTH, GUESSES, serverURL } from "../constantsAndTypes";

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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const [gameStatus, setGameStatus] = useState("on");

  async function checkWord(idx: number) {
    fetch(`${serverURL}${board[idx].map((Obj) => Obj.char).join("")}`)
      .then((res) => res.json())
      .then((body) => {
        styleBoard(idx, body);
        body === "bbbbb" && gameEnded("won");
        idx === 4 && body !== "bbbbb" && gameEnded("lose");
      });
  }

  function gameEnded(endedWith: string) {
    if (userName !== "Guest") {
      endedWith === "won" &&
        localStorage.setItem("wins", (Number(localStorage.getItem("wins")) + 1).toString());
      endedWith === "lose" &&
        localStorage.setItem("losses", (Number(localStorage.getItem("losses")) + 1).toString());
    }
    alert(`You just ${endedWith} the game`);
    setGameStatus(endedWith);
  }

  function styleBoard(row: number, relativeTo: string) {
    const newBoard = [...board];
    newBoard[row].forEach(
      (charObj, idx) => (charObj.status = relativeTo.split("")[idx] as "b" | "c" | "m" | "")
    );
    styleKeyboard(newBoard[row]);
    setBoard(newBoard);
  }

  function styleKeyboard(checkedBoardRow: charObj[]) {
    function helper(statusToCheck: "m" | "c" | "b") {
      checkedBoardRow
        .filter((e) => e.status === statusToCheck)
        .forEach((char) => {
          const row = "QWERTYUIOP".includes(char.char)
            ? 0
            : "ASDFGHJKL".includes(char.char)
            ? 1
            : 2;
          newKeyboard[row][newKeyboard[row].findIndex((key) => key.char === char.char)].status =
            statusToCheck;
        });
    }
    const newKeyboard = [...keyboard];
    // @ts-ignore
    ["m", "c", "b"].forEach(helper);
    setKeyboard(newKeyboard);
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    user && setUserName(user);
  }, []);

  useEffect(() => {
    if (userName !== "Guest") {
      localStorage.setItem("user", userName);
      localStorage.setItem("wins", localStorage.getItem("wins") || "0");
      localStorage.setItem("losses", localStorage.getItem("losses") || "0");
    }
  }, [userName]);

  useEffect(() => {
    const newGame = new Game();
    setKeyboard(newGame.keyboard);
    setBoard(newGame.board);
    setGameStatus("on");
  }, [userName, gameStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    guessIndex: number,
    charIndex: number
  ) => {
    board[guessIndex][charIndex].char = e.target.value.toUpperCase();
    if (board[guessIndex].every((Obj) => Obj.char !== "")) {
      checkWord(guessIndex);
    } else {
      setBoard(board);
    }
  };

  const handleHelpModal = (setTo: boolean) => {
    setIsHelpOpen(setTo);
  };

  const handleLoginModal = (setTo: boolean) => {
    setIsLoginOpen(setTo);
  };

  const passNewName = (ref: React.MutableRefObject<HTMLInputElement>) => {
    if (!ref.current || !ref.current.value) return;
    setIsLoginOpen(false);
    setUserName(ref.current.value);
    ref.current.value = "";
  };

  return {
    keyboard,
    board,
    handleInputChange,
    handleHelpModal,
    isHelpOpen,
    userName,
    passNewName,
    isLoginOpen,
    handleLoginModal,
  };
}
