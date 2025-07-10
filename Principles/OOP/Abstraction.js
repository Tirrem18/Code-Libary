// Abstraction

// Abstraction means showing only the necessary details and hiding the internal complexity.
// It helps keep code clean by exposing what an object does, not how it does it.

// We create abstraction using classes and methods that expose simple interfaces,
// while keeping the internal logic private or separate.


// Abstraction Example: User and Authentication

class User {
    #password

    
    constructor(username, password) {
        this.username = username;
        this.#password = password; // private field
    }

    // Public method to check password
    login(inputPassword) {
        if (this.#checkPassword(inputPassword)) {
            console.log("Login successful");
        } else {
            console.log("Login failed");
        }
    }

    // Private method – hidden from outside
    #checkPassword(input) {
        return input === this.#password;
    }
}

// Usage
const user = new User("alice", "1234");

user.login("1234"); //  Login successful
user.login("wrong"); //  Login failed
// user.#checkPassword("1234"); //  Error – private method
