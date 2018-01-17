//FUNCTION DECLARATIONS AND EXPRESSIONS

function greet(firstName = 'John' , lastName = 'Doe'){ //assigning defaults

//if(typeof firstName === undefined){firstName = 'John'}
//if(typeof lastName === undefined){lastName = 'Doe'}
return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

//Function expressions
const square = function(x = 12){
  return x*x;
}

console.log(square());

//Immediately Invokable Function Expressions - IIFEs
(function(name){
  console.log('Hello ' + name);
})('Brian');

(function(){
  console.log('IIFE ran');
})('');

//Property Method
const todo = {
  add: function(){
    console.log('Add a new todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

//calling above functions
todo.add();
todo.edit(11);
todo.delete();

