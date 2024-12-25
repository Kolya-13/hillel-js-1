// Task 1

// Function Declaration
function calculateAreaDecl(width, height) {
    return width * height;
}
console.log("Function Declaration:", calculateAreaDecl(5, 10));

// Function Expression
const calculateAreaExpr = function(width, height) {
    return width * height;
};
console.log("Function Expression:", calculateAreaExpr(5, 10));

// Arrow Function
const calculateAreaArrow = (width, height) => width * height;
console.log("Arrow Function:", calculateAreaArrow(5, 10));
