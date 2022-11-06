
export class Anagram {
  input: string;
  
  constructor(input: string) {
    this.input = input;  
  }

  public matches(...potentials: string[]): string[] {
    return potentials.reduce((arr: string[], word) =>{
      const isAnagram = 
        [...word.toLowerCase()].sort().join("") ===
        [...this.input.toLowerCase()].sort().join("");
      const isOwnAnagram = word.toLowerCase() === this.input.toLowerCase();
      
      if(isAnagram && !isOwnAnagram) {
        arr.push(word)
      }
      return arr
    },[]);
  }
}