import { createContext, useRef } from "react";
import { charObj } from "../constantsAndTypes";

export type API = {
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
  isLoginOpen: boolean;
  isHelpOpen: boolean;
};

const initContext: API = {
  keyboard: [[]],
  board: [[]],
  handleInputChange: () => {},
  handleHelpModal: () => {},
  userName: "",
  passNewName: () => {},
  handleLoginModal: () => {},
  isLoginOpen: false,
  isHelpOpen: false,
};

export const wordleContext = createContext<API>(initContext);
