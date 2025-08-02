// Count how many times a string has the letter a

// const school = "Bogura Zilla School";
// let count = 0;
// for (const letter of school) {
//   console.log(letter);
//   if (letter === "a") {
//     count = count + 1;
//   }
// }
// console.log(`the number of letter a is ${count}.`);

// Task-2:
// // Count how many times a string has the letter a or A
// const school = "Amar Desher Nam Bangaldesh. Amar Nam Nakib";
// let count = 0;
// for (const letter of school.toLowerCase()) {
//   if (letter === "a") {
//     count = count + 1;
//   }
// }
// console.log(`the number of letter a is ${count}.`);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

// const sentence = "The name of my country is Bangladesh";
// let count = "";
// for (const vowel of sentence.toLowerCase()) {
//   if (
//     vowel === "a" ||
//     vowel === "e" ||
//     vowel === "i" ||
//     vowel === "o" ||
//     vowel === "u"
//   ) {
//     console.log("nakib.");
//     count.push(vowel);
//   }
// }
// if (count === "aeiou") {
//   console.log("all vowels are here.");
// }

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// const place = "Coxs Bazar";
// let new_place = "";
// for (const letter of place) {
//   if (letter === "x") {
//     new_place = place.replaceAll("x", "y");
//   }
// }
// console.log(new_place);

// with the replace() method

// let str = "exam example xoxo";
// let result = str.replace(/x/g, "y");
// console.log(result);

const place = "X-men, coXs Bazar";
let new_place = "";
for (const letter of place) {
  if (letter === "x") {
    new_place = place.replaceAll("x", "y");
  } else if (letter === "X") {
    new_place = place.replace(/X/g, "Y");
  }
}
console.log(new_place);

// Task-5:
// Capitalize Every first Letter of each word in a String

// const sentence = "amar desher nam bangladesh";
// new_sentence = sentence.split(" ");
// console.log(new_sentence);
// let capitalized = [];

// for (const word of new_sentence) {
//   const capital = word[0].toUpperCase();
//   capitalized = capitalized.push(capital);
// }
// console.log(capitalized);

//
