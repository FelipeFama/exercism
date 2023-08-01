 export const answer = (question: string) => {
  let words = parseText(question)
  if(words.length == 1) return parseInt(words[0])
  
  return evaluate(words);
}

 function isValidWord (word: string): boolean {
   return (word.includes("plus") || word.includes("minus") || word.includes("multiplied") || word.includes("divided"));
 }
  
 function parseText (input: string): string[] {
   input = input.replace("What is ","");
   input = input.replace("What is?","");
   input = input.replace("?","");
   input = input.replaceAll("multiplied by","multiplied");
   input = input.replaceAll("divided by", "divided");

   let words = input.split(" ");
    
   if(words[0] == "") throw new Error("Syntax error");
    words.forEach(function (word) {
     if(!isValidWord(word) && isNaN(parseInt(word))) throw new Error("Unknown operation");
    }); 
    return words
  }

 function evaluate(words:string[]): number {
    if(isValidWord(words[0])) throw new Error("Syntax error");

    let result: number = parseInt(words[0]);
  
    for(let i = 1; i < words.length; i += 2) {
      words[i] + " " + words[i + 1]

      if(i == words.length - 1) {
        throw new Error("Syntax error");
      } else if(isValidWord(words[i + 1])) {
        throw new Error("Syntax error");
      }

      let num = parseInt(words[i + 1]);
      switch(words[i]) {
        case "plus": 
          result += num;
        break;
        case "minus":
          result -= num;
        break;
        case "multiplied": 
          result *= num;
        break;
        case "divided":
          result /= num;
        break;
        default:
          throw new Error("Syntax error");
      }
    }
    return result
  }