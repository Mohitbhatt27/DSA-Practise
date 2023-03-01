function natural(n){
    if(n<1){   
        return;
    }
    console.log(n);
    natural(n-1);
    //console.log(n);
}
natural(10);