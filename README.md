# Ms_Iifes_Carlot
Using immediately augmented invoked functions to display single page car application
## Getting Started
Iifes are crucial in web development and are essential in web development due to its amazing ability to conserve data privacy.

A function declaration is the "normal" way of creating a named function.
Below is an example of a normal function:
`(function () {
    // logic here
})();`

Assigning a function to a variable or property creates a function expression:
`// Assignment of a function expression to a variable
var myFunction = function () { /* logic here */ };

// Assignment of a function expression to a property
var myObj = {
    myFunction: function () { /* logic here */ }
};`

A function created in the context of an expression is also a function expression
Below is an example of a function expression:
`// Anything within the parentheses is part of an expression
(function () { /* logic here */ });

// Anything after the not operator is part of an expression
!function () { /* logic here */ };`

Always remember JavaScript expressions return values!

That means that if we want to invoke the function expression right away we just need to add parentheses to the end.
Below is an example of an IIFE:
`(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();

// ReferenceError: foo is not defined
console.log(foo);`

`function myImmediateFunction () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
}

myImmediateFunction();

// ReferenceError: foo is not defined
console.log(foo);`

You can also always pass arugments into an Iiffe as well. 
`var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);`

## Prerequisites

## Installing

## Deployment

## Built With
  * Javascript
  * Bootstrap
  * HTML5 & CSS3
  
## Authors
  * [Helana Nosrat](www.helanan.com)
  
## License
This project is licensed under the MIT License - see the LICENSE.md file for details
