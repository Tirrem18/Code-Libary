//Encapsulation

// Encapsulation is the act of bundling data (like variables) and methods (functions) that work on that data into one unit (a class),
// while restricting direct access to some of the object's components for better control and security.


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

console.log(myAccount.getBalance());  // ✅ Read via method
myAccount.deposit(200);               // ✅ Update via method
myAccount.withdraw(150);             // ✅ Withdraw with validation
console.log(myAccount.getBalance());  // ✅ Final balance

// console.log(myAccount.#balance);   ❌ Will throw an error — private field!