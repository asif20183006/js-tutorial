hoistedFunctiom();
// testArrowHoisting();
function hoistedFunctiom(){
    console.log("function invoked");
}
const testArrowHoisting=()=>{
    console.log("Arrow function invoked");
}
testArrowHoisting();

var a=10;
function b(){
    a=20;
    return;
}

function a(){
    a=10;

}
console.log(a); // 10 because we have creted variable if we invoked this function the output will be 20

b();
console.log(a); // 20 invoked b()
a(); 

function a(){
    console.log("I am a");
    return function b(){
        console.log("I am b");
    }
};
const c=a();
c();