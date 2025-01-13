let users = [
    { name: "Nick", email: "nick@example.com", age: 25 },
    { name: "Taras", email: "taras@example.com", age: 28 },
    { name: "Igor", email: "igor@example.com", age: 35 }
];

// Перебір масиву за допомогою циклу for...of з деструктуризацією
for (let { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}