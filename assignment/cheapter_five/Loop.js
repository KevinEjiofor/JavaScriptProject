function everyLoop(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) {
        return false; 
      }
    }
    return true; 
  }
  
  
  const numbers = [1, 2, 3, 4, 5];
  const allEven = everyLoop(numbers, (number) => number % 2 === 0);
  console.log(allEven); 
  