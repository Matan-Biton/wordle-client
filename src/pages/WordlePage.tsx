import { useWordleUI } from "../hooks/useWordleUI";
import { wordleContext } from "../providers/wordleContext";
import { Header } from "../components/Header";
import { Playground } from "../components/Playground";
import { Keyboard } from "../components/Keyboard";

export function WordleApp() {
  const wordleApi = useWordleUI();

  return (
    <wordleContext.Provider value={wordleApi}>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Playground />
        <Keyboard />
      </div>
    </wordleContext.Provider>
  );
}
