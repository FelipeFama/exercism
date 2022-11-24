//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (text, rails) => {
  let result = new Array(rails).fill("")
  let rail = 0;
  let down = true;
  text.split("").forEach((cur,i) => {
    result[rail] += cur;
    if(down) {
      if(rail == rails-1) {
        down = false;
        rail--;
      } else {
        rail++;
      }
    } else {
      if(rail == 0) {
        down = true;
        rail++;
      } else {
        rail--;
      }
    }
  });
  return result.join("");
};

export const decode = (text, rails) => {
  let result = new Array(rails).fill(" ".repeat(text.length));
  let rail = 0;
  let down = true;
  for(let i = 0; i < text.length; i++) {
    result[rail] = replaceAt(result[rail],i,"*");
    if(down) {
      if(rail == rails-1) {
        down = false;
        rail--;
      } else {
        rail++;
      }
    } else {
      if(rail == 0) {
        down = true;
        rail++;
      } else {
        rail--;
      }
    }
  }
  
  rail = 0;
  for(let i = 0; i < text.length; i++) {
    let spot = result[rail].indexOf("*");
    if(spot == -1) {
      rail++;
      spot = result[rail].indexOf("*");
    }
    result[rail] = replaceAt(result[rail], spot, text.charAt(i));
  }
  
  rail = 0;
  down = true;
  let res = ""
  for(let i = 0; i < text.length; i++) {
    res += result[rail][i];
     if(down) {
      if(rail == rails-1) {
       down = false;
        rail--;
       } else {
        rail++;
      }
    } else {
      if(rail == 0) {
        down = true;
        rail++;
      } else {
        rail--;
      }
    }
  }
  return res
};

function replaceAt(text, index, rep) {
  return text.substr(0, index) + rep + text.substr(index + rep.length);
}