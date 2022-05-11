// whenever a function return another function with it lexical scope
function outer(){
    var a=10;
    return function inner(){
        console.log(a); // if we remove this line then will not be remain clouser
    }
};
const b=outer();
b(); // 10
