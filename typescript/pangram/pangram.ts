export function isPangram(sentence: string) {
  let lowerLetters = sentence.toLowerCase()
  return [...'abcdefghijklmnopqrstuvwxyz']
   .every(letter => lowerLetters.includes(letter))
}
