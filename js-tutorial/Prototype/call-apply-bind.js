const person ={
    firstName: "Test",
    lastName: "Testing",
}
const person1 ={
    firstName: "Test",
    lastName: "Testing",
}
function fullName(){
    return this.firstName+this.lastName;
}
// person.fullName();
// call, apply and bind(methods are use for external or explicit binding)
const bindedFunction=fullName.bind(person);
const bindedFunction1=fullName.bind(person1);
console.log(bindedFunction(),bindedFunction1());


const person={
    firstName: "test",
    lastName: "testing",
}
function fullName(args){
    console.log(args);
    return this.firstName+this.lastName+args;
}
console.log(fullName.call(person,"23","24"));
console.log(fullName.apply(person,["25","24"]));

