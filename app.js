const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(33,4,5,4);
const fruit = ['Apple', 'po', 'Banana', 'Orange'];
const mixed = [null, 5, 'ff', {a:2}, new Date()]

let val;

// GEt array length
val = numbers.length;
// Check if if array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// insert into arrays
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYA
//Add on to end
numbers.push(3);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from the front
numbers.shift();
// Splice values
numbers.splice(1,3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the compare function
val = numbers.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find
function under50(num){
  return num < 50;
};

val = numbers.find(under50);

console.log(numbers);
console.log(val);