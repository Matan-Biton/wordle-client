import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Header() {
  const { userName, handleHelpModal, handleLoginModal } = useContext(wordleContext);

  return (
    <header className="bg-teal-500 w-screen min-h-[10vh] flex items-center justify-between px-6 py-2">
      <div className="font-bold">Hello, {userName}</div>
      <div className="font-bold absolute translate-x-[45vw]">Wordle</div>
      <div>
        <button className="bg-gray-400 border-2 border-gray-900 rounded-md px-4 hover:bg-gray-500" onClick={() => handleLoginModal(true)}>{userName === 'Guest' ? "Login" : "Change user"}</button>
        <button className="ml-4 bg-gray-400 border-2 border-gray-900 rounded-md px-4 hover:bg-gray-500" onClick={() => handleHelpModal(true)}>Help</button>
      </div>
    </header>
  );
}
