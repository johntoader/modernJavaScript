const firstName = 'Williams';
const lastName = 'Johnson';
const age = 38;

const str = 'Hello everyone, my name is John';
const tags = 'web design, UX, UI, programming, coding';

let val;

//Concatenate

val = firstName + lastName;
val = firstName + ' ' + lastName;

//Append
val  = 'John ';
val += 'Toader';

val = 'Hello, my name is ' + firstName + ' and my age is ' + age;

//Escaping

val = "That's awesome, I can't wait";
val = 'That\'s awesome, I can\'t wait'; // \is escaping characters

//Lenght
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toLowerCase();
val = lastName.toUpperCase();

//Get character at a location (array)
val = firstName[5];

//indexOf
val = firstName.indexOf('i'); //tells us location of a character starting at the beginning of the string
val = firstName.lastIndexOf('i'); //tells us location of a character starting at the beginning of the string

//charAt
val = firstName.charAt('5');

//Get last character
val = firstName.charAt(firstName.length - 1);

//substring - extracts part of a string
val = firstName.substring(0, 5);

//slice
val = firstName.slice(2, 6);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('John', 'Vince');

//includes()
val = str.includes('ello'); //verifies is characters are in the string





console.log(val);