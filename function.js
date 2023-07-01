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