const codonProteins: { [key: string]: string } = {
  'AUG': 'Methionine',
  'UUU': 'Phenylalanine',
  'UUC': 'Phenylalanine',
  'UUA': 'Leucine',
  'UUG': 'Leucine',
  'UCU': 'Serine',
  'UCC': 'Serine',
  'UCA': 'Serine',
  'UCG': 'Serine',
  'UAU': 'Tyrosine',
  'UAC': 'Tyrosine',
  'UGU': 'Cysteine',
  'UGC': 'Cysteine',
  'UGG': 'Tryptophan',
  'UAA': 'STOP',
  'UAG': 'STOP',
  'UGA': 'STOP',
}

export function translate(str: string): string[] {
  const m = [...str.matchAll(/([AUGC]{3})/g)].map(arr => codonProteins[arr[0]])
  return m.indexOf('STOP') !== -1 ? m.slice(0, m.indexOf('STOP')) : m
}
