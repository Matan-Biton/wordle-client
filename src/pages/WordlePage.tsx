import { useWordleUI } from "../hooks/useWordleUI";
import { wordleContext } from "../providers/wordleContext";
import { Header } from "../components/Header";
import { Board } from "../components/Board";
import { Keyboard } from "../components/Keyboard";
import HelpModal from "../components/HelpModal";

export function WordleApp() {
  const wordleApi = useWordleUI();

  return (
    <wordleContext.Provider value={wordleApi}>
      <div className="flex flex-col h-screen justify-between items-center">
        <HelpModal />
        <Header />
        <Board />
        <Keyboard />
      </div>
    </wordleContext.Provider>
  );
}
