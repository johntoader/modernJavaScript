//Object literals

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'], //array
  address: {
    city: 'Miami',
    state: 'FL'
  }, //inbeded objects
  getBirthyear: function(){
    return 2017 - this.age;
  },
}

let val;

val = person;

//Get specific value from above
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address;
val = person.address.state;
val = person.address['city'];
val = person.getBirthyear();

console.log(val);

const people = [
  {name: 'John', age: 33},
  {name: 'Mike', age: 22},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.lenght; i++){
  console.log(people[i].name);
}