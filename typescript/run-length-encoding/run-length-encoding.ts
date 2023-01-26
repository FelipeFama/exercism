

export function encode(str: string) {
  return str.replace(
    /([\w\s])\1+/g, 
    (match, char) => match.length+char
  )
}

export function decode(str: string) {
  return str.replace(
    /(\d+)([\w\s])/g, 
    (match, times, char) => char.repeat(times)
  )
}
