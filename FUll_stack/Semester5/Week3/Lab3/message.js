// Export value
exports.name = "Hello";

// export function
exports.sum=function(a,b) {
  return a + b;
}

//list
exports.mycars = ["Mazda", "BMW","Ford"];

// export Class 
// 
class Car {
  constructor(type)
  {this.type = type;}
  Model() {
    return this.type;
  }
  Age() {
    return this.Age;
  }
}
exports.Car = Car;




