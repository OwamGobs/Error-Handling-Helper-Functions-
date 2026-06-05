function validateUserInput(name, age) {
  if (!name || age === undefined || age === null) {
    throw new Error("Input is empty, enter a name and age.");
  }
  if (typeof name !== "string") {
    throw new Error("Name must be a string.");
  }
  if (typeof age !== "number" || Number.isNaN(age)) {
    throw new Error("Age must be a valid number.");
  }
  return { name: name.trim(), age };
}

function demonstrateReferenceError() {
  try {
    console.log(undefinedVariable);
  } catch (error) {
    console.log("Reference Error:", error.message);
  }
}

function demonstrateTypeError() {
  try {
    let num = 10;
    num.toUpperCase();
  } catch (error) {
    console.log("Type Error:", error.message);
  }
}

function demonstrateRangeError() {
  try {
    let array = new Array(-1);
  } catch (error) {
    console.log("Range Error:", error.message);
  }
}

function runDemo() {
  try {
    const validInput = validateUserInput("Owam", 19);
    console.log("Validated input:", validInput);
  } catch (error) {
    console.log("Validation Error:", error.message);
  }

  demonstrateReferenceError();
  demonstrateTypeError();
  demonstrateRangeError();
}

runDemo();

// Question 3

function scrambleStringBackwards(input) {
  return input.split("").reverse().join("");
}

function getOriginalName(input) {
  return scrambleStringBackwards(input);
}

function UppCaseString(input) {
  return input.toUpperCase();
}
const reversedName = scrambleStringBackwards("Owam");
const originalName = getOriginalName(reversedName);
const  upperCaseName = UppCaseString("Owam");
console.log("Original name:", originalName); 
console.log("Uppercase name:", upperCaseName);
console.log("Reversed name:", reversedName);

// Question 4

let arr = ["pizza" , "burger", "pasta" , "salad"];

function addItem(arr, item) {
  arr.push(item);
  return arr;
}

// Helper function to remove the last item from an array
function removeLastItem(arr) {
    arr.pop();
    return arr;
}  

function getArrayLength(arr) {  
    return arr.length;
}

console.log(addItem(arr, "sushi")); // Adds "sushi" to the array
console.log(removeLastItem(arr)); // Removes the last item ("sushi") from the array
console.log(getArrayLength(arr)); // Returns the length of the array