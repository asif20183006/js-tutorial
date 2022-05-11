// this keyword in javaSript which refers to current object or object
console.log(this);
const obj1={
    firstName: "asif",
    lastName: "ullah",
    fullName:function(){
        console.log(this);
    }
}
obj1.fullName();
