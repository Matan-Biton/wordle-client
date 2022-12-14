import { useWordleUI } from "../hooks/useWordleUI";
import { wordleContext } from "../providers/wordleContext";
import { Header } from "./Header";
import { Playground } from "./Playground";
import { Keyboard } from "./Keyboard";

export function WordleApp() {
  const wordleApi = useWordleUI();

  return (
    <wordleContext.Provider value={wordleApi}>
      <Header />
      <Playground />
      <Keyboard />
    </wordleContext.Provider>
  );
}
