//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if(!this.checkPrime(p) || !this.checkPrime(g)) {
      throw new Error('')
    }
    this.p = p;
    this.g = g;
  }

  checkPrime = (n) =>{
    let flag = true;
    if(n <= 1) { return false }
    for(let i = 2; i < Math.sqrt(n); i++) {
      if(n % i === 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  getPublicKey(privateKey) {
    if(privateKey > 1 && privateKey < this.p) 
      return (this.g ** privateKey) % this.p
    throw new Error('')
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p
  }
}
