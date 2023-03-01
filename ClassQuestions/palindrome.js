function palindrome3(num){
    let str=""+num;
    let i=0;
    let j=str.length-1;
    while(i<=j){
        if(str[i]==str[j]){
            i++; j--;
        }
        else return false;
    }
    return true;
}

console.log(palindrome3(123));
console.log(palindrome3(121));
console.log(palindrome3(12345));
console.log(palindrome3(545));
console.log(palindrome3(112111));


function palindrome(num){
    let rev=0;
    let n_copy=num;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    if(n_copy===rev)
    return true;
    return false;
}

function palindrome2(num){
    let num_string=String(num);
    let splitString = num_string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    if(joinArray==num){
        console.log(true);
    }
    else(console.log(false));
}



console.log(palindrome(67676));
console.log(palindrome(154));
console.log(palindrome(67654));
(palindrome2(67676));
(palindrome2(154));
(palindrome2(67654));
