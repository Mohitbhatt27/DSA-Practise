function fibo(n) {
    let dp = Array(n+1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
  }
  
  console.log(fibo(50));  // 12586269025
