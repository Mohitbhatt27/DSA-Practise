// for(i=0; i<=10; i++){
//     for(j=i; j<=10; j++){
//         if(i+j==5) break;
//         console.log(i,j);
//     }
// }

let i=0;
while(i<=5){
    if(i==4) {
        i++; //important
        continue;
    }
    console.log(i);
    i++;
}

const x = 17 % 5;
const y = x ? 'One' : 'Two';
console.log(y);