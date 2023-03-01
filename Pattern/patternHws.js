// function pattern(n){
//     for(let i=1; i<=n; i++){
//         let str="";
//         for(let space=1; space<= (i-1); space++){
//             str+=" ";
//         }
//         for(let j=1; j<= (n+1-i); j++){
//             str+="*"
//         }
//         console.log(str);
//     }
// }
// pattern(4);


function pattern2_first(n){
    let str="";
        for(let first=1; first<=n; first++){
            str+="*";
        }
        console.log(str);
        
    }

    function pattern2_mid(n){
        for(let i=1; i<=n; i++){
            let str="*";
            for(let space=1; space<=(n-2); space++){
                str+=" ";
            }
            str+="*";
            console.log(str);
        }
    }

    function pattern2_last(n){
        let str="";
        for(let first=1; first<=n; first++){
            str+="*";
        }
        console.log(str);
        
    }
function allInone(n){
    pattern2_first(n);
    pattern2_mid(n);
    pattern2_last(n);
}

allInone(5);

