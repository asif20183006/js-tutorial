// function take another function as a argument and returning a function from its body is callled higher order function
function hoc(callback){
    callback();
}
hoc(()=>{

});
 function hoc(){
     return ()=>{

     };
 }

//  when we want abstraction then we use higher order function
function calculate(callback){
    return callback(3,5);
}
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
console.log(calculate(add));
console.log(calculate(multiply));


// var a=10;
// var b= 20;
function calculator(callback){
    switch(9){
        case 1:
            return callback(1);
        case 2:
            return callback(1,2);
        case 9:
            return callback(1,2,3,4,5,6,7,8,9);
        
    }
}
// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }

// console.log(calculator(subtract));
function add(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum= sum+args[i];
    }
    return sum;
}
// console.log(add(1,2,3));
console.log(calculator(add));