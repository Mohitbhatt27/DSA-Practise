//Q. given an array of strings, Print all the unique strings in the array

function unique (arr){
    var obj={};
    for(const elem of arr){
        if(!obj[elem]){
            obj[elem]=true;
        }  
    }
    console.log(Object.keys(obj))
}

let arr=["John", "Mohit", "John"];
unique(arr);


/*
 * if the function that we are passing in map takes two arguments
 * then first argument will be accessign the actual value
  * second argument will be accessing index of that value
*/

const newArr = [9,8,7,6,5];
function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}
/*
 * here map is looping over every element
 * and then passing element, index in the function print
 */
const result2 = newArr.map(print)
console.log(result2);

