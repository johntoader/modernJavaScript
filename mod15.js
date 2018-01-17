//If Statements and Comparison operators

/*
//Syntax
if(something){
  do something
}
else{
  do something else
}
*/

const id = 100;

// //Equal to ==
// if(id == 100){
//   console.log('Correct');
// }
// else{
//   console.log('Incorrect');
// }

// //Not Equal to !=
// if(id != 101){
//   console.log('Correct');
// }
// else{
//   console.log('Incorrect');
// }

// //Equal to Value and Type ===
if(id === 100){
  console.log('Correct');
}
else{
  console.log('Incorrect');
}

// //Not Equal to Value and Type !==

//Test if value is "undefined"
if(typeof id !== 'undefined'){
   console.log(`The ID is ${id}`);
 }
 else{
   console.log('No ID');
 }

//Greater of Less than <>
if(id >= 100){
     console.log('Correct');
   }
   else{
     console.log('Incorrect');
   }

//If Else
const color = 'yellow';

if(color === 'red'){
  console.log('Colour is red');
}else if(color === 'blue'){
  console.log('Colour is blue');
}else{
  console.log('Colour is not red or blue');
}

//Logical Operators

const name = 'Steve';
const age = 20;

if(age >0 && age < 12){
  console.log(`${name} is a child`);
} else if(age > 13 && age < 19){
  console.log(`${name} is a teenager`);
}else{
  console.log(`${name} is an adult`);
}

//OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in the race`);
}else{
  console.log(`${name} can register for the race`);
}

//Ternary operators
//Short-hand if and else
//if ?
//else :
console.log(id === 100 ? 'Correct' : 'Incorrect');

//Without curly braces - not recomended
if(id === 101)
  console.log('correct');
else
  console.log('incorrect');

















