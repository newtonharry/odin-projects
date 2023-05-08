let operations = []; // List of operations
let current_number = ""; // Current number being typed in

// Elements on the page
let calculatorOutput = document.querySelector(".output-result"); // Calculator output element
let calculatorOutputPreview = document.querySelector(".output-preview"); // Calculator output element
let clearButton = document.querySelector(".clear");
let backspaceButton = document.querySelector(".backspace");
var numbers = document.querySelectorAll(".number");

// Perform the operations on all of the numbers and operands given
function operate() {
  let result = "";
  switch (operations[1]) {
    case "+":
      operations.splice(0, 3, operations[0] + operations[2]);
      result = `${operations[0].toFixed(2)}`;
      break;
    case "-":
      operations.splice(0, 3, operations[0] - operations[2]);
      result = `${operations[0].toFixed(2)}`;
      break;
    case "*":
      operations.splice(0, 3, operations[0] * operations[2]);
      result = `${operations[0].toFixed(2)}`;
      break;
    case "/":
      if (operations[2] === 0) {
        result = "IMPOSSIBLE!";
      } else {
        operations.splice(0, 3, operations[0] / operations[2]);
        result = `${operations[0].toFixed(2)}`;
      }
      break;
  }
  calculatorOutput.textContent = result;
}

// takes in a string with numerical characters and converts it to a float or integer depending on the input
function convert(number) {
  return number.includes(".") ? parseFloat(number) : parseInt(number);
}

// Clear the content from the calculator output
clearButton.onclick = () => {
  calculatorOutput.textContent = "";
  calculatorOutputPreview.textContent = "";
  operations = [];
  current_number = "";
};

backspaceButton.onclick = () => {
  current_number = calculatorOutput.textContent.slice(0, -1);
  calculatorOutput.textContent = current_number;
};
// Detect events from each number button to append to the current_number string and reflect it in the calculator output
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    let dots = [...current_number].filter((l) => l === ".").length; // Number of dots in the current_number
    if (dots < 1) {
      current_number += number.value; // Append the number pressed to a string (to form large numbers)
      calculatorOutput.textContent = current_number; // Update the value of the output number
    } else if (dots >= 1 && number.value !== ".") {
      current_number += number.value; // Append the number pressed to a string (to form large numbers)
      calculatorOutput.textContent = current_number; // Update the value of the output number
    }
  });
});

// Detect events from the operand buttons
var operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
  operand.addEventListener("click", () => {
    // When to push a number
    // When to push an operand
    // When to perform the operation() function

    // If the array has a length of zero or two and a number is entered
    if (
      (operations.length === 0 || operations.length === 2) &&
      current_number !== ""
    ) {
      let number = convert(current_number); // Convert the number entered
      operations.push(number); // Push the converted number to the operations array

      // If the operation is an equal sign and the number of operations in the array is 3
      if (operand.value === "=" && operations.length === 3) {
        operate(); // Calculate the operations
      } else if (operand.value !== "=") {
        operations.push(operand.value); // Push the operand to the operations array
        if (operations.length > 3) {
          // If there are more than 3 operations in the array
          operate();
        }
      }
      // Check if there is just 1 operation in the array which is a number
    } else if (operations.length === 1) {
      if (current_number != "") {
        operations = []; // Empty the operations array (remove the result of the last equal expression)

        let number = convert(current_number); // Convert the number entered
        operations.push(number); // Push the converted number to the operations array
        operations.push(operand.value); // Push the operand to the operations array
      } else if (operand.value !== "=") {
        operations.push(operand.value);
      }
      // Check if the last operation was an operand
    } else if (typeof operations[operations.length - 1] === "string") {
      operations[operations.length - 1] = operand.value;
    }

    calculatorOutputPreview.textContent = operations.join(" ");
    current_number = "";
  });
});
