const readline = require('readline');

// Set up input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user a question
rl.question('This wil lask what topics / functions youd like to run from main? ', (answer) => {
  console.log(`You typed: "${answer}"`);

})