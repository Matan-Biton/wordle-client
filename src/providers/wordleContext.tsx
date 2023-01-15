import { createContext } from "react";

interface API {
  keyPassed: (key: string) => void;
  userName: string
}

const initContext: API = {
  keyPassed: () => { },
  userName: ''
}

export const wordleContext = createContext<API>(initContext);

