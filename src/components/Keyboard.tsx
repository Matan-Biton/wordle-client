import { board, colorMap, stylesCodes } from "../constantsAndTypes";
import React from "react";

interface IProps {
  board: board;
  getStyleCode: (char: string, board: board) => stylesCodes;
}

export function Keyboard(props: IProps): React.ReactElement {
  const { board, getStyleCode } = props;
  const qwertyTwoDimensionalArray = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div id="keyboard" className="flex flex-col gap-2 mb-10">
      {qwertyTwoDimensionalArray.map((row, i) => (
        <div key={i} className="flex gap-2 justify-center">
          {row.map((key, i) => (
            <div
              key={i}
              className={`border-yellow-700 min-w-[2em] border-2 rounded-md text-center ${
                colorMap.get(getStyleCode(key, board)) || ""
              }`}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
