function isPangram(string) {
  const str = string.toLowerCase().replace(/ /g,'').split("");
  let res = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {       
      let match = str.find(e => e == alphabet[i])
      res.push(match)      
      if ( res[0] === undefined) {
        return false
      }
      res = [];   
  }
  return true;
 }
 
 console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // > true
 console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));  //true
 console.log(isPangram("This is not a pangram.")) // > false
 console.log(isPangram("This is false")) // > false