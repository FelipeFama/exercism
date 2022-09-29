//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const findAnagrams = (word, candidates) => {
  return candidates
    .filter((c) => c.toLowerCase() !== word.toLowerCase())
    .filter(
      (c) =>
        c.toLowerCase().split("").sort().join("") ===
        word.toLowerCase().split("").sort().join("")
    );
};