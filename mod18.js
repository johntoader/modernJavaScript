//FOR look

// for(let i = 0; i < 10; i++){ //var or let used as variable will change
//   if(i === 2){ //set a rule
//     console.log('2 is my favourite number'); //display the result of the IF statement
//     continue; //lets the "for" loop continue
//   }

//   if(i === 5){ //new rule
//     console.log('Stop the loop'); //display result of new "if"
//     break; //stop the "for" loop
//   }
//     console.log('Number ' + i); //simple declaration to display "i"
// }

//WHILE loop

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

//DO WHILE loop

// let i = 10; //set variable
// do{
//   console.log('Number ' + i); //display variable
//   i++; //set the incremental rule
// }
// while(i < 10); //set the boundary

//ARRAY loop - FOR

const cars = ['ford', 'audi', 'porsche', 'honda'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//ARRAY loop - FOREACH
// cars.forEach(function(car, index, array){
//   console.log(car);
//   console.log(`${index}: ${car}`); //creates an index and uses it beside the array value
//   console.log(array); //displays array
// });

//MAP
//return a different array
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Jack'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });
// console.log(ids);

//FOR IN loop

const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 40
}

for(let x in user){
  console.log(x); //getting the keys 
  console.log(`${x}: ${user[x]}`); //getting teh keys and values
}
