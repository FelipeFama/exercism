interface INucleotideCounts {
  A: number;
  C: number;
  G: number;
  T: number;
}

export function nucleotideCounts(nucleotideString: string) {
  return [...nucleotideString]
    .reduce<INucleotideCounts>((acc, nucleotide) => {
      if(!(nucleotide in acc)) throw new Error("Invalid nucleotide in strand")

      acc[nucleotide as keyof INucleotideCounts] += 1;

      return acc;
    }, initNucleotideCounts())
}

function initNucleotideCounts(): INucleotideCounts {
  return {
    'A': 0,
    'C': 0,
    'G': 0,
    'T': 0
  }
}