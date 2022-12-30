export function parse(phrase: string){
  return phrase
    .replace(/([A-Z]+)/g, " $1")
    .split(/[ -]/)
    .map(word => word[0])
    .join('')
    .toUpperCase()
}
