// function declarations

function greet(firstName = 'john', lastName = 'Faith'){
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof lastName === 'undefined'){lastName = 'Faith'}
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName ;
}

console.log(greet());

// Function expressions

const square = function(x = 4){
  return x * x;
};

console.log(square());

// Immidiately invokable function expressions - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log( `Hello ${name}`);
// })('Mashakura');

// Property methods

const todo = {
  add: function(){
    console.log('Add too..')
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();