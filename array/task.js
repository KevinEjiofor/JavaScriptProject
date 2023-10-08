let array = [];

let row = []
let row2 = []
let row3= []


let person1 ={
    name: "China",

    population: 10000,

    temprature: 12,

    currecy: "CH"
}

let person2 ={
    name: "Lagos",

    population:20000,

    temprature:10,

    currecy: "NG"
}


let person3 ={
    name: "France",

    population: 50000,

    temprature: -9,

    currecy: "FR"
}

let person4 ={
    name: "London",

    population: 4_000,

    temprature: 8,

    currecy: "EUR"
}


let person5 ={
    name: "Patrick",

    population:3_9999,

    temprature:5,

    currecy: "CH"
}


let person6 ={
    name: "Joshua",

    population: 48000,

    temprature: 5,

    currecy:"NG"
}


let person7 ={
    name: "Mike",

    population: 90000,

    temprature: -8,

    currecy: "$"
}


let person8 ={
    name: "Akpan",

    population: 8000,

    temprature: 9,

    currecy: "NG"
};


let person9 ={
    name: "Nigeria",

    population: 6_0000,

    temprature: 10,

    currecy: "NG"
}
row.push(null);
row.push(person1);
row.push(person2);
row.push(null);
array.push(row)





row2.push(person9)
row2.push(person3);
row2.push(null);
row2.push(person4);

array.push(row2)

row3.push(person5);
row3.push(person6);
row3.push(person7);
row3.push(person8);
array.push(row3)

console.table(array)



let totalPopulation = 0;

for (let index = 0 ; index < array.length; index++) {

    for (let index2 = 0; index2 < array[index].length; index2++) {
        let person = array[index][index2]

        if (person && person.temprature <= 10) totalPopulation += person.population;
    
    }
}

console.log("Total Population where Temperature < 10:", totalPopulation);











