import { createContext, useRef } from "react";

// type API = {
//   // keyPassed: (key: string) => void;
//   userName: string;
//   isHelpOpen: boolean;
//   setIsHelpOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   activeElementIndex: React.MutableRefObject<number>;
// }

// // keyPassed: () => { },
// const initContext: API = {
//   userName: '',
//   isHelpOpen: false,
//   setIsHelpOpen: () => { },
//   activeElementIndex: useRef(0),
// }

export const wordleContext = createContext<any | null>(null);

