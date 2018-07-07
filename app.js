let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.URL;
val = document.contentType;

val = document.forms;

val = document.links;
val = document.links[0];

val = document.images;
val = document.scripts;

let scripts = document.scripts;

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(script){
  console.log(script);
});

console.log(val);