const car1 = {
    brand: "Kia",
    model: "Caratto",
    year: 2018
};

const car2 = {
    brand: "Honda",
    model: "Accord",
    owner: 2020
};

const car3 = { ...car1, ...car2 };

console.log(car1);
console.log(car2);
console.log(car3);