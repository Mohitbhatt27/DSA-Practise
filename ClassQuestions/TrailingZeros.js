//Given an integer n, write a function that returns the count of trailing zeroes in n!.

/*
Approach:
A simple method is to first calculate factorial of n, then count trailing 0s in the result 
(We can count trailing 0s by repeatedly dividing the factorial by 10 till the remainder is 0).
*/

/*
The above method can cause overflow for slightly bigger numbers as the factorial of a number is a big number 
(See factorial of 20 given in above examples). 
The idea is to consider prime factors of a factorial n. 
A trailing zero is always produced by prime factors 2 and 5. 
If we can count the number of 5s and 2s, our task is done.
*/

/*
n = 5, 5!=120. There is one 5 and 3 2s in prime factors of 5! (2 * 2 * 2 * 3 * 5). So a count of trailing 0s is 1.
n = 11: There are two 5s and eight 2s in prime factors of 11! (2^8 * 3^4 * 5^2 * 7). So the count of trailing 0s is 2.
*/

/*
We can easily observe that the number of 2s in prime factors is always more than or equal to the number of 5s. 
So if we count 5s in prime factors, we are done
*/

/*
How to count the total number of 5s in prime factors of n!? A simple way is to calculate floor(n/5). For example, 7! has one 5, 10! has two 5s. It is not done yet, there is one more thing to consider. Numbers like 25, 125, etc have more than one 5. For example, if we consider 28! we get one extra 5 and the number of 0s becomes 6. Handling this is simple, first, divide n by 5 and remove all single 5s, then divide by 25 to remove extra 5s, and so on.
*/

/*
Trailing 0s in n! = Count of 5s in prime factors of n!
                  = floor(n/5) + floor(n/25) + floor(n/125) + ....
*/


function NoOfTrailingZeros(n)
{
 
    if(n < 0)
      return -1;
    let count = 0;
 
    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}
 
// Driver Code
    let n = 100;
    console.log("Count of trailing 0s in " + 100
        + "! is " + NoOfTrailingZeros(n));