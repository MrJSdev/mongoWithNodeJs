let Person = function() {
  this.i = 0;
};

Object.prototype.getAge = function(age) {
  return age
}

Person.prototype.getName = function(name) {
  return 'Your name is this.... ' + name;
};
Person.prototype.dynamicValue = function getData() {
  return {
    age: this.age,
    location: this.location
  }
}
let ob4 = {
  age: 45,
  location: 'Mumbai',
  phone: 99293949595
}
var person1 = new Person();
console.log(person1.getName('Shahnawaz'))
let data = person1.dynamicValue.call(ob4);
let yourAge = person1.getAge(78)
var person2 = new Person();
console.log(person2)