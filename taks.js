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

const sentence = "amar desher nam bangladesh";
new_sentence = sentence.split(" ");
console.log(new_sentence);
let capitalized = "";

for (const word of new_sentence) {
  const capital = word[0].toUpperCase() + word.slice(1);
  console.log(typeof capital);
  capitalized = capitalized + " " + capital;
}
console.log(capitalized);

// String to Array of Words
// let name = "  Robin Singh   ";
// console.log(name.trim().split(" "));

// 4. Extract Characters
// Write a JavaScript function to extract a specified number of characters from a string.

let name = "  Robin Singh  ";

sliced_part = name.trim().slice(0, 4);
console.log(sliced_part);

// Alternative Solution

truncate_string = function (str1, length) {
  if (str1.constructor === String && length > 0) {
    return str1.slice(0, length);
  }
};
console.log(truncate_string("Nakibul Hasan", 7));

// Random Problem
const paragraph = "I think Ruth's dog is cuter than your dog.";
const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first ${searchTerm} is ${indexOfFirst}`);
console.log(
  `The index of the second ${searchTerm} is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);

// 5. Abbreviate Name

// Write a JavaScript function to convert a string into abbreviated form.

abbrev_name = function (str) {
  let abbreviated_name = "";
  splitted_name = str.split(" ");
  console.log(splitted_name[1]);
  abbreviated_name = splitted_name[1][0].toUpperCase() + ".";
  return `${splitted_name[0]} ${abbreviated_name}`;
};
console.log(abbrev_name("Robin Singh"));
//  --> Output: Robin S.

let str1 = "Hello World";
let new_str = str1.replace("World", "Javascript");
console.log(new_str);

// 2. What is the purpose of the charAt() method in JavaScript?
// The charAt() method returns the character at a specified index in a string. For example:
