const person ={
    firstName: "Test",
    lastName: "Testing",
}
const person1 ={
    firstName: "Test",
    lastName: "Testing",
}
function fullName(args){
    console.log(args);
    return this.firstName+this.lastName+args;
}
// person.fullName();
// call, apply and bind(methods are use for external or explicit binding)
//
//const bindedFunction1=fullName.bind(person1);
//console.log(bindedFunction(),bindedFunction1());
const bindedFunction=fullName.call(person,"23","24");
console.log(fullName.apply(persion1,["23", "24"]))
// call take as separate argument and appy take array as an argumnet
