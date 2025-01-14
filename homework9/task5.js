let users = [
    { name: "Nick", email: "nick@example.com", age: 25 },
    { name: "Taras", email: "taras@example.com", age: 28 },
    { name: "Igor", email: "igor@example.com", age: 35 }
];


for (let { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
