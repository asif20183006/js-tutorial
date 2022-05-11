function sumMaxMin(arr){
    // write code here
    // return the output , do not use console.log here
    var min=Math.min.apply(Math,arr);
    var max=Math.max.apply(Math,arr);
     console.log(min,max);
    // for(let i=1;i<arr.length;i++){
    //     if(min>arr[i]){
    //         min=arr[i];
    //         console.log(min);
    //     }
    //     if(max<arr[i]){
    //         max=arr[i];
    //     }
    // }
    var ans= min+max;
    return ans;

}
var arr=[1,2,3,4,5];
console.log(sumMaxMin(arr));