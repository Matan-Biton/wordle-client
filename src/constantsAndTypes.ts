export const GUESSES = 5;
export const WORD_LENGTH = 5;
export const serverURL = "http://localhost:3333/";
export const colorMap = new Map([
  ["b", "bg-green-500"],
  ["c", "bg-yellow-300"],
  ["m", "bg-gray-500"],
]);

export type stylesCodes = "b" | "c" | "m" | "";

export type charObj = {
  char: string;
  status: stylesCodes;
};

export type attempt = charObj[];

export type board = attempt[];