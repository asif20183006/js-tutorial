// inside every object and every function there is a property is called prortotype
// refrence of another object contains common atributes and common properties
// if we want some costumize method then we use prototype
// for creating inheritance
// it is a global object of each and every object
var arr=[1,2,3,4,5,6];
console.log(arr);
Array.prototype.test=function(){
    conslo.log(this);
}
arr.test();

// example with object
// proto is a internal property of a function and object but prototype is a external property of an object
// we have access to external proto
// proto is a pointer to a prototype
// it is also an object

const animalSound={
    sound:(s)=>{
        console.log(s);
    }
};

const cat={
    bread:"persian cat"
}
const dog={
    bread:"labrador"
}
cat.__proto__=animalSound;
dog.__proto__=animalSound;
cat.sound("mew");
dog.sound("booh");
// consolelog(cat.sound("mew"));
// console.log(dog.sound("booh"));
//  if we want to use prototype directly then we have to create like this
const dog=new Object();
dog.prototype.test="anything";