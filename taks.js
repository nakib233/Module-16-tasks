// Count how many times a string has the letter a

const school = "Bogura Zilla School";
let count = 0;
for (const letter of school) {
  console.log(letter);
  if (letter === "a") {
    count = count + 1;
  }
}
console.log(`the number of letter a is ${count}.`);

// Task-2:
// Count how many times a string has the letter a or A
