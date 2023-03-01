//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

function parentheses(n,open,closing,osf){
    if(open==n && closing==n){
        console.log(osf);
        return;
    }
    if(open>n || closing>n){
        return;
    }
    
    parentheses(n,open+1,closing,osf+"(");
   
    if(open>closing){ //we can only add closing parentheses if open>closing 
    parentheses(n,open,closing+1,osf+")");
    }
}

parentheses(8,0,0,"");