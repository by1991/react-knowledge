// Read: https://itnext.io/write-better-javascript-function-composition-with-pipe-and-compose-93cc39ab16ee

// function composition of any number of functions
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);

// function composition using pipe of any number of functions
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
const double2 = x => x * 2
const square2 = x => x * x

// function pipe
var output_final = pipe(square2, double2)(2);
console.log(output_final);