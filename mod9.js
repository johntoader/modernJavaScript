const num1 = 100;

const num2 = 47;

let val;

//Simple math
val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 - num2;
val = num1 % num2;

//Math Object

val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.6); //round up
val = Math.floor(2.3); //round down
val = Math.sqrt(64); //sqare root
val = Math.abs(-3); 
val = Math.pow(8, 2); //to the power of
val = Math.min(2, 56, 7, 34, 12, 4); //smallest number
val = Math.max(2, 56, 7, 34, 12, 4); //largest number
val = Math.random(); //gives a random number

val = Math.floor(Math.random() * 21); //random number up to 20 remove decimal
val = Math.random() * 21; //random number up to 20 with decimal

console.log(val);