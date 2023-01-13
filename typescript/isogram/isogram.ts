export const isIsogram = (phrase:string) => {
  const letters = phrase.toLowerCase().replace(/[^a-z]/g, '')
  return letters.length === new Set(letters).size
}
