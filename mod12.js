//Create arrays

const numbers = [2,25,45,17,56];

const numbers2 = new Array(1,18,26,32,98,45);

const fruit = ['Apples', 'Bananas', 'Pears', 'Oranges'];

const mixed = [26, 'Hello', null, true, undefined, {a:1, b:2}, new Date()];

let val;

//Get array lenght
val = numbers.length;

//Check is is in array
val = Array.isArray(numbers);

//Get single value in an array
val = numbers[3];
val = numbers2[4];

//Insert into an array
numbers[2] = 99;

//Find index of a value (where it is in the array)
val = numbers.indexOf(99);

//Mutating arrays
numbers.push(250); //add on to end

numbers.unshift(120); //add to start

numbers.pop(); //remove from end

numbers.shift(); //remove from start

//Splice values
numbers.splice(1,3);

//Reverse arrays
numbers.reverse();

//Concatenate arrays
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();
val = numbers2.sort();

//Use the "compare" function
val = numbers2.sort(function(a,b){
  return a - b;
});

//Reverse sort
val = numbers2.sort(function(a,b){
  return b - a;
});

//Find
function under50(num){
  return num < 50;
}

val = numbers2.find(under50);

console.log(numbers);
console.log(val);
