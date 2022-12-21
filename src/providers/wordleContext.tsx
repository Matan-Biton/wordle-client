import { ChangeEvent, createContext } from "react";

interface API {
  answer: string;
  curAttempt: number;
  inputsGrid: string[][];
  firstEmpty: () => number;
  keyPassed: (key: string) => void;
  // checkWord: (event: ChangeEvent) => void;
  // deleteLastChar: () => void;
}

const initContext: API = {
    answer: '',
    curAttempt: 0,
    inputsGrid: [['']],
    firstEmpty: () => 0,
    keyPassed: () => {},
    // checkWord: () => {},
    // deleteLastChar: () => {}   
}

export const wordleContext = createContext<API>(initContext);

