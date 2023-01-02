interface oldKey {
  [key: string]: string[];
}

interface newKey {
  [key: string]: number;
}

export function transform(oldScores: oldKey): newKey {
  const newScores: newKey = {};
  for(const score in oldScores){
    for(const letter of oldScores[score]) {
      newScores[letter.toLowerCase()] = Number(score)
    }
  }

  return newScores;
}
