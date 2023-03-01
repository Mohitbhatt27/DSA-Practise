function ways(i,j,m,n,osf){

    if(i>m-1 || j>n-1){
        return 0;
    }

    if(i==m-1 && j==n-1){
        console.log(osf);
        return;
    }

    ways(i+1,j,m,n,osf+"D")+ways(i,j+1,m,n,osf+"R");//osf is output so far
    
    

}

(ways(0,0,4,4,""));