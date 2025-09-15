    /*
    find the index of 30
    using splice remove the value
    return array
    */
function removeItem(arr, ele){
    const index = arr.indexOf(ele);  //index of ele = 30

    if(index == -1){
        return 'element not found in the array';
    }
    arr.splice(index, 1); //remove the element(30)
    return arr;
}
console.log(removeItem([10,20,30,40,50], 30));   //[10,20,40,50]


//using filter methods

// function removeItem(arr, ele){

//     return arr.filter(item => item !== ele);
// }
// console.log(removeItem([10,20,30,40,50], 30));   //[10,20,40,50]
















 