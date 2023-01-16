import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";
import { colorMap } from "../types";

export default function HelpModal() {
  const { isHelpOpen, setIsHelpOpen } = useContext(wordleContext);

  return (
    <div
      className={`flex justify-between p-10 w-screen h-screen absolute z-10 bg-gray-300 ${
        isHelpOpen ? "" : "hidden"
      }`}
    >
      <div className="info">
        <h1 className=" font-bold">HOW TO PLAY</h1>
        <h2 className=" font-semibold">You have 5 attempts on guessing the answer</h2>
        <ul>
          <li className=" list-disc ml-12">Every attempt must have 5 letters</li>
          <li className=" list-disc ml-12">
            After filling an attempt it would automatically send your guess and will color the
            letters accordingly
          </li>
        </ul>
        <h2 className=" font-semibold">Examples:</h2>
        <ul>
          <li className=" list-disc ml-12 after:[w-10]">
            Boxes colored <span className={colorMap.get("bull")}>green</span> indicates on a letter
            in its correct spot
          </li>
          <li className=" list-disc ml-12">
            Boxes colored <span className={colorMap.get("cow")}>yellow</span> indicates on a letter
            that exists in the answer in another spot
          </li>
          <li className=" list-disc ml-12">
            Boxes colored <span className={colorMap.get("missed")}>gray</span> indicates on a letter
            that is not used int the answer OR has one or more uses with the right indications
          </li>
        </ul>
      </div>
      <button
        className="p-2 h-fit bg-gray-500 rounded-md border-2 border-black hover:bg-gray-600"
        onClick={() => {
          setIsHelpOpen(false);
        }}
      >
        Dismiss
      </button>
    </div>
  );
}
