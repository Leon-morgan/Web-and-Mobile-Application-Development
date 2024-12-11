

// part 1 

console.log("This is my first javaScript Program");
console.log("My name is Leon");
console.log("My future salary will be £100000");


// part 2 

const num3 = 5;
const num4 = 3;
// add two numbers
const sum = num3 + num4;
// display the sum

console.log('The sum of ' + num3 + ' and ' + num4 + ' is: ' + sum);

// part 3  

// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));
// check if number is greater than 0
if (number > 0) {
 console.log("The number is positive");
}
// check if number is 0
else if (number == 0) {
 console.log("The number is zero");
}
// if number is less than 0
else {
 console.log("The number is negative");
}

// part 4 

function Add(number1, number2){

  const results =  number1 + number2;
  console.log(number1 + " + " + number2 +" = "  + results);
}


function Subtract(number1, number2){

    const results =  number1 - number2;
    console.log(number1 + " - " + number2 +" = "  + results);
  }

  function Multiply(number1, number2){

    const results =  number1 * number2;
    console.log(number1 + " x " + number2 +" = "  + results);
  }

  function Divide(number1, number2){

    const results =  number1 / number2;
    console.log(number1 + " / " + number2 +" = "  + results);
  }

  function SquareRoot(number1){

    const results =  Math.sqrt(number1);
    console.log("The Square Root of " + number1 +" is " +  results);
  }

  function Squared(number1, number2){

    const results =  Math.pow(number1, number2);
    console.log(number1 + " To the power of " + number2 +" = "  + results);
  }


  const num1 = parseInt(prompt("Enter a number: "));
  const num2 = parseInt(prompt("Enter a number: "));



Add(num1, num2);
Subtract(num1, num2);
Divide(num1, num2);
Multiply(num1, num2);
Squared(num1, num2);
SquareRoot(num1, num2);







