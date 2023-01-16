import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";

export default function HelpModal() {
  const { userName, setUserName } = useContext(wordleContext);

  const newUserName = "yossi";

  return (
    <div>
      <button
        className="p-2 h-fit bg-gray-500 rounded-md border-2 border-black hover:bg-gray-600"
        onClick={() => {
          setUserName(newUserName);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
