const numbers = [18, 25, 30, 7];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(`Сума елементів масиву: ${sum}`);