//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const codonProteins = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
}

export const translate = (RNA = "") => {
  let proteins = []
  
  for (let i = 0; i < RNA.length; i += 3) {
    let codon = RNA.substring(i, i + 3)
    if (codonProteins.hasOwnProperty(codon)){
      if (codonProteins[codon] === "STOP") return proteins;
      proteins.push(codonProteins[codon]);
    } else throw new Error("Invalid codon");
  }
  return proteins;
};
