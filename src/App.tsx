import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { HelpModal } from "./components/HelpModal";
import { LoginModal } from "./components/LoginModal";
import React, { useEffect, useRef, useState } from "react";
import { attempt, board, charObj, GUESSES, serverURL, stylesCodes, WORD_LENGTH } from "./constantsAndTypes";

export function App() : React.ReactElement {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [board, setBoard] = useState([[]] as board);
  const [userName, setUserName] = useState("Guest");
  const [gameStatus, setGameStatus] = useState("on");

  const wordKey = useRef(0);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, guessIndex: number, charIndex: number) => {
    if (isHelpOpen || isLoginOpen) return;
    board[guessIndex][charIndex].char = e.target.value.toUpperCase();
    if (board[guessIndex].every((Obj) => Obj.char !== "")) {
      checkWord(guessIndex);
    } else {
      setBoard([...board]);
    }
  };

  function locateFocus() {
    const emptyTile = document.querySelector(`.tile[value='']`) as HTMLInputElement | null;
    emptyTile && emptyTile.focus();
  }
  setTimeout(locateFocus, 0);

  async function checkWord(idx: number) {
    fetch(`${serverURL}${board[idx].map((Obj) => Obj.char).join("")}/${wordKey.current}`)
      .then((res) => res.json())
      .then((body) => {
        styleBoard(idx, body);
        setTimeout(() => {
          evalGameState(body, idx);
        }, 25);
      });
  }

  function evalGameState(attempt: attempt, idx: number) {
    const isWin = attempt.every((char: charObj) => char.status === "b");
    isWin && gameEnded("won");
    idx === 4 && !isWin && gameEnded("lose");
  }

  function styleBoard(row: number, newAttempt: attempt) {
    const newBoard = [...board];
    newBoard[row] = newAttempt;
    setBoard(newBoard);
  }

  function gameEnded(endedWith: string) {
    alert(`You just ${endedWith} the game`);
    setGameStatus(endedWith);
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    user && setUserName(user);
  }, []);

  useEffect(() => {
    userName !== "Guest" && localStorage.setItem("user", userName);
  }, [userName]);

  async function fetchWordKey() {
    fetch(serverURL)
      .then((res) => res.json())
      .then((ans) => (wordKey.current = Number(ans)));
    return wordKey.current;
  }

  useEffect(() => {
    fetchWordKey();
    setBoard(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Array.from(Array(GUESSES)).map((_) =>
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Array.from(Array(WORD_LENGTH)).map((_) => ({ char: "", status: "" } as charObj))
      )
    );
    setGameStatus("on");
  }, [userName, gameStatus]);

  const handleHelpModal = (setTo: boolean) => {
    setIsHelpOpen(setTo);
  };

  const handleLoginModal = (setTo: boolean) => {
    setIsLoginOpen(setTo);
  };

  const passNewName = (ref: React.MutableRefObject<HTMLInputElement | null>) => {
    if (!ref.current || !ref.current.value) return;
    setIsLoginOpen(false);
    setUserName(ref.current.value);
    ref.current.value = "";
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUserName("Guest");
  };

  const getStyleCode = (char: string, board: board): stylesCodes => {
    const charStyles = board
      .flat()
      .filter((e) => e.char === char)
      .map((char) => char.status);
    const styleCode =
      charStyles.find((style) => style === "b") ||
      charStyles.find((style) => style === "c") ||
      charStyles.find((style) => style === "m") ||
      "";
    return styleCode;
  };
  return (
    <div className="flex flex-col h-screen justify-between items-center">
      {isHelpOpen && <HelpModal handleHelpModal={handleHelpModal} />}
      {isLoginOpen && <LoginModal passNewName={passNewName} />}
      <Header
        userName={userName}
        handleHelpModal={handleHelpModal}
        handleLoginModal={handleLoginModal}
        logout={logout}
      />
      <Board board={board} inputHandler={inputHandler} />
      <Keyboard board={board} getStyleCode={getStyleCode} />
    </div>
  );
}
