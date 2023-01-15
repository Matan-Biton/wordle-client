import { createContext } from "react";

interface API {
  keyPassed: (key: string) => void;
  userName: string,
  isHelpOpen: boolean,
  setIsHelpOpen: (newState: boolean) => void
}

const initContext: API = {
  keyPassed: () => { },
  userName: '',
  isHelpOpen: false,
  setIsHelpOpen: () => { }
}

export const wordleContext = createContext<API>(initContext);

