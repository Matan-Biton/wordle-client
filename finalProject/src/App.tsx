// import { useState } from "react";
import { Header } from "./components/Header";
import { Playground } from "./components/Playground";
import { Keyboard } from "./components/Keyboard";

function App() {
  const state = {
    answer: "",
    attemptsAllowed: 5,
    curAttempt: 0,
    entries: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
  };

  return (
    <>
      <Header />
      <Playground entries={state.entries} />
      <Keyboard />
    </>
  );
}

export default App;
