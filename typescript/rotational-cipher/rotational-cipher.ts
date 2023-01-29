const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export function rotate(str:string , rotation:number): string {
  const arr = str.split('');
  let result = ''

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].toLowerCase() != arr[i].toUpperCase()) {
      const rotate = alphabet[(alphabet.indexOf(arr[i].toLowerCase()) + rotation) % 26]
      
        if(arr[i] == arr[i].toUpperCase()) {
          result += rotate.toUpperCase()
        } else {
          result += rotate
      }
    } 
    else {
      result += arr[i]
    }
  }
  return result
}
