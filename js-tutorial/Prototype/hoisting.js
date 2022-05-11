// console.log(a);
// widow is a global object inside browser
// console.log(window);
// v8 engine
// complete program 
console.log(a);
var a;
a=3;
console.log(a);
//  after first pass or memory allocation
// v8 engine working..
// a: undefined
// start execution phase 2
// console.log(a);
// a=3

// hoisting is a memory allocation phase
// whenver delclaration  are moving to top is called hosting

function add(a,b){
    return 2+3;
}
var b=3;
