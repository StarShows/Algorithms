// FIZZBUZZ
// Create a for loop to loop between 1 to 100
for (var index = 1; index < 101; index++) {
  if (index % 15 == 0) {
    console.log("fizzbuzz");
  } else if (index % 3 == 0) {
    console.log("Fizz");
  } else if (index % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
}
