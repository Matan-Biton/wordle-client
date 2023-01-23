import { createContext, useRef } from "react";
import { charObj } from "../constsAndTypes";

type API = {
  keyboard: charObj[][];
  board: charObj[][];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    guessIndex: number,
    charIndex: number
  ) => void;
  handleHelpModal: (setTo: boolean) => void;
  isHelpOpen: boolean;
  userName: string;
  passNewName: (ref: React.MutableRefObject<null>) => void;
};

const initContext: API = {
  keyboard: [[]],
  board: [[]],
  handleInputChange: () => {},
  handleHelpModal: () => {},
  isHelpOpen: false,
  userName: "",
  passNewName: () => {},
};

export const wordleContext = createContext<API>(initContext);
