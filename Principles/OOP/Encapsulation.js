// Encapsulation

// Encapsulation is about keeping related data and functions together in one unit – usually a class.
// It also means hiding certain parts of the data so they can only be changed in controlled ways.

// This helps protect the internal state of an object and prevents other code from accidentally changing things it shouldn't.

// We use access modifiers (like private) to hide variables, and provide public methods to interact with them safely.



// Encapsulation Example: Bank Account

class BankAccount {
    #balance; // private field

    constructor(owner, startingBalance) {
        this.owner = owner;
        this.#balance = startingBalance;
    }

    // Public method to get the balance
    getBalance() {
        return `Current balance: £${this.#balance}`;
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited £${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Public method to withdraw money
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else {
            this.#balance -= amount;
            console.log(`Withdrew £${amount}`);
        }
    }
}

// Usage
const myAccount = new BankAccount("Jacob", 1000);

console.log(myAccount.getBalance());  //  Read via method
myAccount.deposit(200);               // Update via method
myAccount.withdraw(150);             // Withdraw with validation
console.log(myAccount.getBalance());  //  Final balance

// console.log(myAccount.#balance);   This Will throw an error as its a private field