// write a function that console logs this

function log(msg){
  console.log(msg);
  console.log(arguments);
}
log('hello world');
log("foo", "baz", "beans");

// what happens when I want to add more parameters???
log('hello', 'world');

// allow the function to call multiple arguments
function log(){
  console.log.apply(console, arguments);
}

log('hello', 'world', "This", "is", "sweet!");