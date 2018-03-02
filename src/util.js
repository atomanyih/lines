export const range = (n) => Array(n).fill().map((_, i) => i);
export const scale = (min, max) => (i) => (1 - i) * (max - min) + min;
