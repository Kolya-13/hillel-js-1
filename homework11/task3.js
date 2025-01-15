const fetch = require('node-fetch');

// Функція для отримання todo
async function fetchTodo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todo = await response.json();
        return todo; 
    } catch (error) {
        throw new Error(`Помилка під час отримання todo: ${error.message}`);
    }
}

// Функція для отримання user
async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user = await response.json();
        return user; 
    } catch (error) {
        throw new Error(`Помилка під час отримання user: ${error.message}`);
    }
}

// Ф-ція для запитів із async/await
async function fetchData() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log("Результати Promise.all:");
        console.log("Todo об'єкт:", todo);
        console.log("User об'єкт:", user);

        const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
        console.log("Результат Promise.race:");
        console.log(firstResult); 
    } catch (error) {
        console.error("Помилка під час виконання запитів:", error.message);
    }
}

fetchData();