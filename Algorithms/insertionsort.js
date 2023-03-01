function insertionsort(arr){
    let n=arr.length;
    for (let i = 1; i < n; i++)
    { 
        let key = arr[i]; 
        let j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
//Insertion sort is used when number of elements is small. 
//It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.
let numbers = [7.9,1,9,3,6,18,2];
insertionsort(numbers);
console.log(numbers);

