let val;

// Number to string
val = String(555);
val = String(4+4)

// bool to string
val = String(true);
// Date to String
val =  String(new Date());
// Array to String
val = String([4,24,4])

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([2,13,43]);

val = parseInt('100.30');
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2

console.log(sum);
console.log(typeof sum);