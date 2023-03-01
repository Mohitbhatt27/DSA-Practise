var lengthOfLIS = function(nums) {
    let n=nums.length;
    let dp=Array(n).fill(1); //minimum length of a subsequence would be 1
    if(n<=1) return n;
    let ans=1;
    for(let i=1; i<n; i++){
        for(let j=0; j<i; j++){
            if(nums[j]>nums[i]){
                dp[i]=Math.max(dp[i],dp[j]+1);

            }     
        }
        if(dp[i]>ans){
            ans=dp[i];
        }
    }
    console.log(ans);
    return dp;
};
console.log(lengthOfLIS([0,1,0,3,2,3]));
