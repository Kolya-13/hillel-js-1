const numbers = [-2, 5, -8, 7, 0, 12, -4, 0, 15];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const number of numbers) {
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);