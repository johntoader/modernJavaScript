//Date and Time

let val;

const today = new Date();
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1991');
birthday = new Date('9/11/1978');

//get method
val = today.getMonth();
val = today.getDay();
val = today.getSeconds();
val = today.getFullYear();
val = today.getHours();
val = today.getMilliseconds();
val = today.getTime();

//Set method
//Overwriting the date
birthday.setMonth(7); //like array - August
birthday.setDate(12);
birthday.setFullYear(1987);
birthday.setHours(4);
birthday.setMinutes(45);
birthday.setSeconds(13);



console.log(birthday);