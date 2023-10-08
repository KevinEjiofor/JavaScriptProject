function range(start, stop, step = 1) {
    const array = [];
    if (step > 0) {
      for (let index = start; index <= stop; index += step) {
        array.push(index);
      }
    } else {
      for (let i = start; i <= stop; i += step) {
        array.push(i);
      }
    }
    return array;
  }
  
  console.log(range(1, 10)); 
  console.log(range(1,10,2))


function sum(numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }

console.log(sum(range(1, 10)))
  