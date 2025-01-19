// Exercise 1 

let greeter = (myArray, counter) => {
  let greeText = 'Hello';
  for (let item of myArray) {
    console.log(`${greeText} ${item}`);
  }
  };

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise2

let capitalize = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join('')};

  console.log(capitalize('fooBar'));
  console.log(capitalize('nodeJs'));


  // Exercise 3
let colors = ['red', 'green', 'blue'];
let capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors)

// exercise 4
let values = [1, 60, 34, 30, 20, 5];
let isLessThan20 = (value) => {
  return value < 20;
}

let filterLessThan20 = values.filter(isLessThan20);
console.log(filterLessThan20);

// exercise 5

var array = [1, 2, 3, 4];

var calculateSum = 0;
for (var i = 0; i < array.length; i++) {
    calculateSum += array[i];
}

var calculateProduct = 1;
for (var i = 0; i < array.length; i++) {
    calculateProduct *= array[i];
}

console.log(calculateSum); 
console.log(calculateProduct); 


// exercise 6
class Car {
  constructor(model, year) {
      this.model = model;
      this.year = year;
  }

  details() {
      return `Model: ${this.model} Engine ${this.year}`;
  }
}


class Sedan extends Car {
  constructor(model, year, balance) {
      super(model, year);
      this.balance = balance;
  }

  info() {
      return `${this.model} has a balance of $${this.balance}`;
  }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); 

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info()); 