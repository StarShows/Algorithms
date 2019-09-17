// 1# Declare a new string
const string = "Hello world!";

// 2# Make a function to run the reverse in
// Method #1:
reverseString1 = string => {
  //Step 1:  turn the input into an array for easy handling
  let splitString = string.split("");
  // Step 2: reverse the array
  let reversedArray = splitString.reverse();
  // Step 3: join the array to a string
  let joinedArray = reversedArray.join("");
  return joinedArray;
};

// -- Run the function
console.log(reverseString1(string));

// - Test cases
console.log(reverseString1("Hello") === "olleH");
console.log(reverseString1("Howdy") === "ydwoH");
console.log(reverseString1("Greetings from Earth") === "htraE morf sgniteerG");

// Method #2:
// shorthand version
reverseString2 = string => {
  return string
    .split("")
    .reverse("")
    .join("");
};

// -- Run the function
console.log(reverseString2(string));

// - Test cases
console.log(reverseString2("Hello") === "olleH");
console.log(reverseString2("Howdy") === "ydwoH");
console.log(reverseString2("Greetings from Earth") === "htraE morf sgniteerG");

// Method #3:
// manual loop version
reverseString3 = string => {
  // Step 1: Create a new temp variable to hold the returned value;
  let tempString = "";

  // Step 2:
  // Create a for loop to iterate through the function
  for (var index = string.length - 1; index >= 0; index--){
      tempString += string[index];
  }
  return tempString;
};

// -- Run the function
console.log(reverseString3(string));

// - Test cases
console.log(reverseString3("Hello") === "olleH");
console.log(reverseString3("Howdy") === "ydwoH");
console.log(reverseString3("Greetings from Earth") === "htraE morf sgniteerG");

// Original algorithm by leetcode, Modified and understood by Alex (Avi) Tannenbaum - Full stack js engineer.
