function everySome(array, predicate) {
    return !array.some((element) => !predicate(element));
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const allEven = everySome(numbers, (number) => number % 2 === 0);
  console.log(allEven); 
  
  