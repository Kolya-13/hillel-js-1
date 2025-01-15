const fetch = require('node-fetch');

// Функція для отримання todo
function fetchTodo() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data); 
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Функція для отримання user
function fetchUser() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data); 
            })
            .catch((error) => {
                reject(error); і
            });
    });
}

// Використання Promise.all
Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log("Результати Promise.all:");
        console.log("Todo об'єкт:", todo);
        console.log("User об'єкт:", user);
    })
    .catch((error) => {
        console.error("Помилка у Promise.all:", error.message);
    });

// Використання Promise.race
Promise.race([fetchTodo(), fetchUser()])
    .then((result) => {
        console.log("Результат Promise.race:");
        console.log(result); 
    })
    .catch((error) => {
        console.error("Помилка у Promise.race:", error.message);
    });