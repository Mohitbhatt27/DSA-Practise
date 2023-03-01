//Find the LCM of a and b
//LCM*HCF=a*b

function hcf(a,b){
    let hcf=1;
    let min= (a<=b)? a:b;
    for(let i=2; i<=min; i++){
        if(a%i==0 && b%i==0){
            hcf=i;
        }
    }
    return (hcf);
}

function lcm(a,b){
    console.log(a*b/hcf(a,b));
}

lcm(9,12);