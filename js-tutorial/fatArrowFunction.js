//arrow function
//Syntex of arrow function
// ()=>{} it is an anonymous function and no name

const test=()=>{
    console.log("arrow function");
}
test();
// console.log("hello");
var obj1 = {
    firstName: "Asif",
    lastName: "abcd",
    fullName: ()=> {
        console.log(this);
    },
    obj2: {
        firstName1: "Shubham",
        lastName2: "Kumar",
        fullName: function () {
           console.log(this);
        }
    }
}
obj1.fullName();
obj1.obj2.fullName();