// 1# Declare a new string
const string = "Hello world!";

// 2# Make a function to run the reverse in
// Method #1:
reverseString = string => {
// Step 1: check if the string is  empty
return (string === "") ? '' : reverseString(string.substr(1)) + string.charAt(0);
};

// -- Run the function
console.log(reverseString(string));

// - Test cases
console.log(reverseString("Hello") === "olleH");
console.log(reverseString("Howdy") === "ydwoH");
console.log(reverseString("Greetings from Earth") === "htraE morf sgniteerG");
