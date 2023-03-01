function subset(arr, res, i,ans) {
    if(i == arr.length) {
       ans.push([Number(res)]);
       //ans.push(res.split(""));
        return;
    }
    subset(arr, res + arr[i], i+1,ans);
    subset(arr, res, i+1,ans);

    return ans;
}

console.log(subset([1,2,3], "", 0,[]));