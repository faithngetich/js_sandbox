let val;

const today = new Date();
let birthday = new Date('9-10-1982 11:25:00');
birthday = new Date('September 10 1982');
birthday = new Date('9/10/1982 11:25:00');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(39);
birthday.setSeconds(12);

console.log(birthday); 