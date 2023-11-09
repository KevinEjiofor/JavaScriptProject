function flattenArray(arrays) {
    return arrays.reduce((accumulator, currentArray) => {
      return accumulator.concat(currentArray);
    }, []);
  }
  
  const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
  const flattenedArray = flattenArray(arrayOfArrays);
  console.log(flattenedArray);
  