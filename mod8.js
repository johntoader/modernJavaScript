let val;

//Number to string
val = String(555);
val = String(4+4);

//Boolean to String
val = String(true);

//date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3,4]);

val = parseInt('100'); //int only
val = parseFloat('100.30'); //decimal only

/*//Output
console.log(val);
console.log(typeof val);
//console.log(val.lenght); //works on String only

console.log(val.toFixed()); //works with number only
*/
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

