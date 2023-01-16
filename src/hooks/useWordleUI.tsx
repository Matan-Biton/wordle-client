import { useEffect, useState } from "react";

export function useWordleUI() {
  function keyPassed(key: string) {
    if (key.match(/^[a-z]$/i)) {
      
      // const targetInput = document.activeElement as HTMLInputElement;
      // console.log(targetInput);
      // targetInput.value = key;
    }
  }

  const [usedLettersMap, setUsedLettersMap] = useState(new Map([
    //TODO complete this implementation
    ['bull', []],
    ['cow', []],
    ['missed', []],
  ]))

  const [userName, setUserName] = useState('')
  useEffect(() => {
    setUserName('Matan')
  }, [])

  const [isHelpOpen, setIsHelpOpen] = useState(false)

  return {
    keyPassed,
    userName,
    isHelpOpen,
    setIsHelpOpen,
    usedLettersMap,
    setUsedLettersMap
  };
}
