function bubbleSort(arr) {
  let n=arr.length;
  for(let i=0; i<n-1; i++){
    let swapped=false;
    for(let j=0; j<n-i-1; j++){
      if(arr[j]>arr[j+1]){
        swapped=true;
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
    if(swapped==false) return arr;  
  }
  
}
  
  let numbers = [4,1,16,3,2,9];
  bubbleSort(numbers);
  console.log(numbers);
  
  /**
   * The time complexity of bubble sort is O(n^2), 
   * so the time taken by the algorithm will increase quadratically with the size of the input. 
   * For an array of size 100, the algorithm will take about 10000 steps to complete. 
   */