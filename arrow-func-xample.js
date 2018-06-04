const names = ['Mandy', 'Briana', 'Angela'];
import { everything } from './public/bundle';

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

const returnMe =(name) => name + '!?!';
console.log(returnMe(''));

 Anontmous functions have a 'this' binding while Arrow functions take on their parents this binding;

const person = {
  name: 'Josiah',
  greet: function() {
    names.forEach(function () {
      console.log(this.name + ' say hi to ' + names)
    });
  }
};
person.greet();

// challange 
function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

two different arrow functions. Use carly braces to specify the return value and the other one use the expression syntax and handle everything in one line

const  addStatement = (c, d) => {
  return c + d;
}
console.log(addStatement(5, 5));

const addExpression = (e, f) => (e + f);
console.log(addExpression(7, 7));


