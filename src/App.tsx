import { useWordleUI } from "./hooks/useWordleUI";
import { wordleContext } from "./providers/wordleContext";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { HelpModal } from "./components/HelpModal";
import { LoginModal } from "./components/LoginModal";

export function App() {
  const wordleApi = useWordleUI();

  return (
    <wordleContext.Provider value={wordleApi}>
      <div className="flex flex-col h-screen justify-between items-center">
        {wordleApi.isHelpOpen && <HelpModal />}
        {wordleApi.isLoginOpen && <LoginModal />}
        <Header />
        <Board />
        <Keyboard />
      </div>
    </wordleContext.Provider>
  );
}
