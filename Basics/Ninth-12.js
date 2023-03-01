/*
n=7
1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7

 */
function toppattern(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        //n=7, i=1,2,3,4,5,6,7  space=0,1,2
        for (let space = 1; space <= i - 1; space++) {
            str += " ";
        }
        //n=7, i=1,2,3,4,5,6,7; j=7;
        for (let j = i; j <= n; j++) {
            str += j + " ";
        }
        console.log(str);
    }
}

function bottomPattern(n) {
    for (let i = 1; i <= n - 1; i++) {
        let str = "";
        //n=7, i=1,2,3,4,5,6 space=5,4,3,2,1,0; i+space+1=n
        for (let space = 1; space <= n - 1 - i; space++) {
            str += " ";
        }
        //n=7; i=1,2,3,4,5,6; j starts from 6,5,4,3,2,1 ; i+j=n; j=n-i (start)
        for (let j = n - i; j <= n; j++) {
            str += j + " ";
        }
        console.log(str);
    }
}

function allInone(n) {
    toppattern(n);
    bottomPattern(n);
}
allInone(7);