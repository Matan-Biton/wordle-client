import { createContext } from "react";

interface API {
  answer: string;
  curAttempt: number;
  inputsGrid: string[][];
  validChars: string;
  firstEmpty: () => number;
  keyPassed: (key: string) => void;
  addChar: (char: string) => void;
  deleteLastChar: () => void;
}

const initContext: API = {
    answer: '',
    curAttempt: 0,
    inputsGrid: [['']],
    validChars: '',
    firstEmpty: () => 0,
    keyPassed: () => {},
    addChar: () => {},
    deleteLastChar: () => {}   
}

export const wordleContext = createContext<API>(initContext);

