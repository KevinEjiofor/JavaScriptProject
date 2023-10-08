function reverseArray(array) {
    const reverseArray = [];
  
    for (let index = array.length - 1; index >= 0; index--) {
      reverseArray.push(array[index]);
    }
  
    return reverseArray;
  }
  
  function reverseArrayInPlace(array) {
    const length = array.length;
    const middle = Math.floor(length / 2);
  
    for (let index = 0; index < middle; index++) {
      const temp = array[index];

      array[i] = array[length - 1 - index];

      array[length - 1 - index] = temp;
    }

  }
  
  const newArray = [2, 4, 6, 8, 10];
  const result1 = reverseArray(newArray); 
  reverseArrayInPlace(newArray);
  
  console.log("Original array (reversed): ", result1);
  console.log("Original array (reversed in place): ", newArray);
  


