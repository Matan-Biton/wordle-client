export type charObj = {
    char: string,
    status: 'bull' | 'cow' | 'missed' | '',
}

export type atts = {
  curAttemptNum: number;
  attemptIdx: number;
  nextAttempt: () => void;
}

export const colorMap = new Map([
  ['bull', 'bg-green-500'],
  ['cow', 'bg-yellow-300'],
  ['missed', 'bg-gray-500'],
])

// export const boardInitial = 

export const qwerty = 'qwertyuiopasdfghjklzxcvbnm';

export const serverURL = "http://localhost:3333/"