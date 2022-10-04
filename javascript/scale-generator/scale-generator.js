//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const sharpScales = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B',]
const flatScales = ['F','Gb','G','Ab','A','Bb','B','C','Db','D','Eb','E',]
const intervalScales = new Map([['m',1], ['M',2],['A',3]])
const useSharps = new Set([
  'C', 'G', 'D', 'A', 'E', 'B', 'F#',
  'a', 'e', 'b', 'f#', 'c#', 'g#', 'd#'
])
let tone = /^[a-gA-G][#b]?$/

export class Scale {
  constructor(tonic) {
    this.tonic = tonic || 'C'
  }

  get tone() {
    return this.tonic[0].toUpperCase() + this.tonic.slice(1)
  }

  chromatic() {
    const chr = useSharps.has(this.tonic) 
    ? sharpScales
    : flatScales
    const i = chr.indexOf(this.tone)
    return [...chr.slice(i),...chr.slice(0,i)]
  }
  
  interval(intervals) {
    const chr = this.chromatic()
    return[...intervals]
    .map(interval => intervalScales.get(interval))
    .reduce((a, i) => 
      [...a,a[a.length - 1] +i], [0])
    .map(i => chr[i])
  }
}
