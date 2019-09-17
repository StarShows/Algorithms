// Palindromes

// Declare sample sting to work with
const testString = "level";

// Method 1:
// Run the function here
palindrome = string => {
  // make sure the input is checked with all lower case
  string = string.toLocaleLowerCase();
  return (
    Array.from(string).toString() ===
    Array.from(string)
      .reverse()
      .toString()
  );
};

// - Test cases - Need to succeed
console.log(palindrome("Level") === true);
console.log(palindrome("11211") === true);
console.log(palindrome("Hello World") === false);

// Method 2:
// Run the function here
palindrome2 = string => {
  // define a variable that equals the length integer of the string
  let stringLength = string.length;
  // set the string to lower case
  string = string.toLocaleLowerCase();

  if (stringLength === 0 || stringLength === 1) {
    return true;
  }
  if (string[0] === string[stringLength - 1]) {
    return palindrome2(string.slice(1, stringLength - 1));
  }
  return false;
};
console.log(palindrome2("test"));
// - Test cases - Need to succeed
console.log(palindrome2("Level") === true);
console.log(palindrome2("11211") === true);
console.log(palindrome2("Hello World") === false);

// Method 3:
// Check for palindrome with a for loop
palindrome3 = string => {
  // Round the number to the nearest one using Math.floor
  let stringLength = Math.floor(string.length / 2);
  string = string.toLocaleLowerCase();

  for (let index = 0; index < stringLength; index++) {
    if (string[index] !== string[stringLength - index - 1]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome3("test"), "wow");
// - Test cases - Need to succeed
console.log(palindrome3("level") === true);
console.log(palindrome3("11211") === true);
console.log(palindrome3("Hello World") === false);
