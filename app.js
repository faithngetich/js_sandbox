// WINDOW METHODS / OBJECTS /PROPERTIES

// ALert
// alert('Hello world');

// Prompt
// const input = prompt();
// alert(input);

//comfirm
// if(confirm('Are you sure')){
//   console.log('YES');
// }else {
//   console.log('NO');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// INner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.searchx;

// Redirect
// window.location.href = 'http://google.com'
// window.location.reload();

// History
// window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
