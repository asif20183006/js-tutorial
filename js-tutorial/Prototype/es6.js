// desturcturing

const person ={
    firstName: "something",
    lastName: "nothing",
}
const {firstName,lastName}=person; // key must be same name for destructuring 
console.log(firstName,lastName);


// for copying object and array we use spread operator(...)
const personCopy= {...person,age:23};
personCopy.firstName="UpdatedSomthing";
console.log(personCopy,person);

// for Array
const arr=[1,2,3,4];
const arrCopy=[...arr,6,7,8];
console.log(arrCopy);
