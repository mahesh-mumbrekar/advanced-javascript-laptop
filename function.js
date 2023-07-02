function greetUser(userName='max') {
    console.log('Hi '+userName +' !');
    
}

greetUser('mahesh');

// if we didnt pass parameter it will show undefined

greetUser();

//incase of numbers

function addNumbers(num1, num2=5) {
    let sum = num1 + num2;
    return sum;
  }
 
let add = addNumbers(1);
console.log(add);

//rest parameters

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(4, 5, 6, 7));  // Output: 22