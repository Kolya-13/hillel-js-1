const fetch = require('node-fetch');

// Клас для роботи з Todo
class TodoService {
    async fetchTodo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const todo = await response.json();
            return todo;
        } catch (error) {
            throw new Error(`Error while receiving todo: ${error.message}`);
        }
    }
}

// Клас для роботи з User
class UserService {
    async fetchUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const user = await response.json();
            return user;
        } catch (error) {
            throw new Error(`Error while receiving user: ${error.message}`);
        }
    }
}


async function fetchData() {
    const todoService = new TodoService();
    const userService = new UserService();

    try {
        // Usage Promise.all
        const [todo, user] = await Promise.all([
            todoService.fetchTodo(),
            userService.fetchUser(),
        ]);
        console.log("Результати Promise.all:");
        console.log("Todo об'єкт:", todo);
        console.log("User об'єкт:", user);

        // Usage Promise.race
        const firstResult = await Promise.race([
            todoService.fetchTodo(),
            userService.fetchUser(),
        ]);
        console.log("Результат Promise.race:");
        console.log(firstResult);
    } catch (error) {
        console.error("Error while receiving requests:", error.message);
    }
}


fetchData();