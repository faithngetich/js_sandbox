// EVENT BUBLING

// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//   console.log('col');
// });


// EVENT DELGATION

// const delitem = document.querySelector('.delete-item');

// delitem.addEventListener('click', deleteITem);

document.body.addEventListener('click', deleteITem);

function deleteITem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}