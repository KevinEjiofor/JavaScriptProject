function deepEqual(value1, value2) {
  if (value1 === value2) {
 
    return true;
  }

  if (typeof value1 !== 'object' || typeof value2 !== 'object' || value1 === null || value2 === null) {
  
    return false;
  }

  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
 
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
    
      return false;
    }
  }

  return true;
}


const person1 = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Cityville',
  },
};

const person2 = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Cityville',
  },
};

const person3 = {
  name: 'Bob',
  age: 25,
  address: {
    street: '456 Elm St',
    city: 'Townsville',
  },
};

console.log(deepEqual(person1, person2));
console.log(deepEqual(person1, person3)); 

