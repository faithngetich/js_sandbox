// For loops

// for(let i = 0; i < 10; i++){
//   // console.log(`Number ${i}`);
//   if(i === 2){
//     console.log(`Number ${i} is my favourite number`);
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop')
//     break;
//   }
  
//   console.log(`Number ${i}`);
// }


// While loop

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// Do while

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// Loop Through Array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car){
//   console.log(car);
// })

// MAP
// const users = [
//   {id: 1, name: 'Faith'},
//   {id: 2, name: 'Mashakura'},
//   {id:3, name: 'KAren'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// })

// console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}