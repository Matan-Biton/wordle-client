import { createContext, useRef } from "react";
import { charObj } from "../constantsAndTypes";

type API = {
  keyboard: charObj[][];
  board: charObj[][];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    guessIndex: number,
    charIndex: number
  ) => void;
  handleHelpModal: (setTo: boolean) => void;
  handleLoginModal: (setTo: boolean) => void;
  userName: string;
  passNewName: (ref: React.MutableRefObject<null>) => void;
};

const initContext: API = {
  keyboard: [[]],
  board: [[]],
  handleInputChange: () => {},
  handleHelpModal: () => {},
  userName: "",
  passNewName: () => {},
  handleLoginModal: () => {},
};

export const wordleContext = createContext<API>(initContext);
