function f(arr, k, i, isswapped) {
    if(k == 0) return;
    if(isswapped==true) {
        f(arr, k-1, 0, false);
        return;
    }
    if(arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        isswapped=true;
    }

    f(arr, k, i+1,isswapped);
}


let arr = [5,4,3,2,1];
f(arr, arr.length - 1, 0, false);

