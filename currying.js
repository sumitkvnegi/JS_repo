/*
 ? Currying is a technique in functional programming where a function with multiple parameters is transformed into a sequence of functions, each taking a single parameter. In JavaScript, you can implement currying using closures.
 */

// ! Regular function with multiple parameters
function add(a, b, c) {
  return a + b + c;
}

// ! Curry the function
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Usage
console.log(add(1, 2, 3)); // Output: 6

const curriedAdd = curryAdd(1)(2)(3);
console.log(curriedAdd); // Output: 6

// * JavaScript also provides a more concise way to create curried functions using arrow functions:

/*
 * const curryAdd = a => b => c => a + b + c;
 * console.log(curryAdd(1)(2)(3)); // Output: 6
 */

// Non-curried function
function calculateTotal(price, tax, discount) {
  return price + price * tax - discount;
}

// Curried function
const curryCalculateTotal = (price) => (tax) => (discount) =>
  price + price * tax - discount;

// Partial application
const applyTax = curryCalculateTotal(100); // Fixing the price at 100

// Later in the code...
const finalPrice = applyTax(0.1)(5); // Calculating the final price with 10% tax and $5 discount
console.log(finalPrice); // Output: 105

/*
 * In this example, currying allows for partial application of the calculateTotal function, fixing the price at 100 and creating a new function (applyTax) that can be reused with different tax and discount values. This promotes code reusability and clarity.
 */
