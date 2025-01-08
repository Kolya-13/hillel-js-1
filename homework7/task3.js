function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers.");
    }
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return numerator / denominator;
}

const testCases = [
    [10, 2],
    [10, 0],
    ["10", 2],
    [10, "2"],
];

testCases.forEach(([numerator, denominator]) => {
    try {
        const result = divide(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
});
