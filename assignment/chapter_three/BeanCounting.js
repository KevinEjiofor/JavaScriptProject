function countChar(string) {
    if (typeof string !== "string") {
      console.log('Input must be a string');

    } else {
      let countTheChar = 0;
  
      for (let index = 0; index < string.length; index++) {
        if (string[index] >= 'A' && string[index] <= 'Z') {
          countTheChar++;
        }
      }
  
      return countTheChar;
    }
}
  
  
  function countB(string,charToSearchFor) {
    if (typeof string !== "string") {
      console.log('Input must be a string');

    }else if (typeof charToSearchFor !== "string"){
        console.log('Input must be an alphabet');

    }else {
      let countTheB = 0;
  
      for (let index = 0; index < string.length; index++) {
        
        if (string[index] === charToSearchFor) {
          countTheB++;
        }
      }
  
      return countTheB;
    }
  }
  
  const result1 = countChar("ziggyT");
  const result2 = countB("BigBadBunny","B");
  
  console.log("Number of uppercase characters: ",result1);
  console.log("Number of times this characters appears in uppercase: ",result2);
  