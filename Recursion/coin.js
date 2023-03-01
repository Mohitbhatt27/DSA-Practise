function f(coins, x) {
    // base case
    if(x == 0) return 0;
    let result = Infinity;
    for(let i = 0; i < coins.length; i++) {
        if(x - coins[i] < 0) continue;
        result = Math.min(result, f(coins, x - coins[i]));
    }
    return 1 + result;
}

console.log(f([9,6,5,1], 11));

  /**
 * Consider a money system consisting of n coins. Each coin has a positive integer
value. Your task is to produce a sum of money z using the available coins in
such a way that the number of coins is minimal.

For example, if the coins are {1,5,7} and the desired sum is 11, an optimal
solution is 5 + 5 + 1 which requires 3 coins.

Input

The first input line has two integers n and z: the number of coins and the
desired sum of money.

The second line has n distinct integers c;,c2,...,¢,: the value of each coin.
Output

Print one integer: the minimum number of coins. If it is not possible to produce
the desired sum, print —1.
 */