export function capitalizeWord(word) {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;

  return capitalizedWord;
}

export function randomNumber() {
  return Math.floor(Math.random() * 806 + 1);
}
