/* 
? In JavaScript, prototype-based inheritance is a fundamental concept that allows objects to inherit properties and methods from other objects. Every object in JavaScript has a prototype, and this prototype forms a chain, leading to the root object from which all objects ultimately inherit. This chain of prototypes is often referred to as the "prototype chain."
*/

/* 
! Prototype:

* Every object in JavaScript has an associated prototype. The prototype is an object from which the current object inherits properties and methods. You can access an object's prototype using the prototype property.
*/

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(Person.prototype); // 1 Prototype of the Person constructor
console.log(john.__proto__); // 2 Prototype of the john object

console.log(Person.__proto__); // 3
console.log(john.prototype); // 4
console.log(john);

// * in JavaScript, functions are a special type of object. They are first-class citizens, which means they can be treated like any other object, including being assigned to variables, passed as arguments to functions, and returned from functions.

/* 
! Here are some key points about functions being objects in JavaScript:

? 1. **Functions are Objects:**
*   - In JavaScript, functions are a type of object. They can have properties and methods like any other object.

   ```javascript
   function greet() {
     console.log('Hello!');
   }

   // Functions can have properties
   greet.counter = 0;

   console.log(greet.counter); // Output: 0
   ```

? 2. **Functions can be Assigned:**
*   - You can assign a function to a variable, just like any other object.

   ```javascript
   const myFunction = function() {
     console.log('This is a function assigned to a variable.');
   };

   myFunction(); // Output: This is a function assigned to a variable.
   ```

? 3. **Functions can be Passed as Arguments:**
*   - Functions can be passed as arguments to other functions.

   ```javascript
   function executeFunction(func) {
     func();
   }

   executeFunction(greet); // Output: Hello!
   ```

? 4. **Functions can be Returned from Functions:**
*   - Functions can return other functions.

   ```javascript
   function createGreetingFunction() {
     return function() {
       console.log('Dynamic Greeting!');
     };
   }

   const dynamicGreet = createGreetingFunction();
   dynamicGreet(); // Output: Dynamic Greeting!
   ```

? 5. **Function Prototype:**
*   - Functions have a `prototype` property that can be used to add properties and methods that will be inherited by objects created with that function as a constructor.

   ```javascript
   function Person(name) {
     this.name = name;
   }

   Person.prototype.sayHello = function() {
     console.log(`Hello, my name is ${this.name}.`);
   };

   const john = new Person('John');
   john.sayHello(); // Output: Hello, my name is John.
   ```

In summary, functions in JavaScript are indeed objects, and their ability to be treated as first-class citizens makes them a powerful and flexible feature of the language.
*/

function sumit() {}

sumit.alias = "kavi";

console.log(sumit.prototype);
