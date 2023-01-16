import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export function Header() {
  const { userName, setIsHelpOpen } = useContext(wordleContext);
    // const user = {name: 'Matan'}
  return (
    <header className="bg-teal-500 w-screen min-h-[10vh] flex items-center justify-between px-6 py-2">
      <div className="font-bold">Hello, {userName}</div>
      <div className="font-bold">Wordle</div>
      <button className=" bg-gray-400 border-2 border-gray-900 rounded-md px-4 hover:bg-gray-500" onClick={() => {setIsHelpOpen(true)}}>Help</button>
    </header>
  );
}
