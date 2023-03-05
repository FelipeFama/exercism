//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUCLEOTIDES = {
  'A': 0,
  'C': 1,
  'G': 2,
  'T': 3
}

export const countNucleotides = ([...strand]) => strand.reduce((counts, nucleotide) => {
    if(NUCLEOTIDES[nucleotide] === undefined) throw new Error('Invalid nucleotide in strand');
    return ++counts[NUCLEOTIDES[nucleotide]] && counts;
  }, [0, 0, 0, 0]).join(' ')