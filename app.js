const firstName = 'William';
const lastName = 'Johnson';
const age = 45;
const str = 'Hey there lovely person';
const tags = 'web design, web developement';

let val;

val = firstName + lastName

// Concatrnation
val = firstName + ' ' + lastName

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + 'and I am ' + age;

// Escaping 
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat
val = firstName.concat('', lastName);

// Change case
val = firstName.toUpperCase();

val = firstName[0];

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length -1);

// substring
val = firstName.substring(0, 4);

// s;ice
val = firstName.slice(0,4);
val = firstName.slice(-3);

// slit()
val = str.split(' ')
val = tags.split(',')

// replace
val = str.replace('Hey', 'Faith');

// includes()
val = str.includes('Hey');

console.log(val);