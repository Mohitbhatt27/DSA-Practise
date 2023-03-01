function add(a,b=0){ //fuction with default argument for b
    return a+b;
}
console.log(add(3,4));
console.log(add(3)); 

//number+undefined=NaN

function addition(a,b=1,c){
    console.log(a+b+c);
}
addition(10,20,30);
addition(10,20); //even though we had default argument for b,
//but the order is will be follwed and 20 is stored in b and
//c will be undefined, so the result on addition will be NaN

//the values that are passed are called parameters
//the placeholder in the function header are called arguments
