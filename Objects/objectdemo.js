let student5={
    name:'lisa',
    age:24,
    marks:78
};

student5.name="Mohit";
student5["age"]=26;
delete student5.marks; //delete student5["marks"];

console.log(student5);

//Given a string try to print the number of occurances of each unique character of a string

// function occur(str){
//     let occurances={};
//     for(const char of str){
//         if(occurances[char]){
//         occurances[char]++;
//         }
//         else{
//             occurances[char]=1;
//         }
//     }
//     console.log(occurances);
// }

// occur("ThisIsANewString");

function occur(str){
    let occurances={};
    for(const char of str){
        if(occurances[char]==undefined){
         occurances[char]=1;
        }
        else{
        occurances[char]++;
        }
    }
    console.log(occurances);
}

occur("ThisIsANewString");