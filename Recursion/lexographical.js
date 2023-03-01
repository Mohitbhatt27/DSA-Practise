//return 1 to n in lexographical order

var lexicalOrder = function(n) {
    let x=0, ans=[];
    return lex(x,n,ans);
};
function lex(x,n,ans){

    if(x>n) return;

    if(x!=0){
        ans.push(x);
    }
    for(let i=(x==0)?1:0; i<=9; i++){
        lex(10*x+i,n,ans);
    }
    return ans;
    }
    console.log(lexicalOrder(13));

    //If x is the current integer being considered in the traversal, then T(n) can be expressed as:
    //T(n)=T(x*10+c), where c will be from 1 to 9
    //for 0 we will have 9 calls, and for rest we will have 10 calls
    //each number will just print itself first and then call the function for x*10+c
