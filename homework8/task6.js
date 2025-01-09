const numbersList = [1, 10, 14, 2, 45, 43, 34];

// 1. Скопіювати масив без мутації
const copiedArray = [...numbersList];
console.log(`Копія масиву: ${copiedArray}`);

// 2. Відсортувати масив за зростанням
const sortedArray = [...numbersList].sort((a, b) => a - b);
console.log(`Відсортований масив: ${sortedArray}`);

// 3. Об'єднати числа у рядок
const joinedString = numbersList.join(", ");
console.log(`Числа у рядку: ${joinedString}`);