let vehicle = {
    "seats": 5,
    "wheels": 4,
    "doors": 2
}
let car ={
    model: "Lambo",
    color:"Peach Black",
    year: "2023",
    __proto__: vehicle
}
console.log(car.color)
console.log(car.doors)


