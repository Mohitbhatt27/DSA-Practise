var rob = function(nums) {
    let n=nums.length;
    let dp=Array(n+1).fill(-1);
    dp[0]=nums[0];
    dp[1]=Math.max(dp[0],nums[1]);
    if(n<2){
        return dp[n-1];
    }
    for(let i=2; i<n; i++){
        let rob=nums[i]+dp[i-2];
        let notrob=dp[i-1];
        dp[i]=Math.max(rob,notrob);
    }
    return dp[n-1];
}

console.log(rob([2,7,9,3,1]));
