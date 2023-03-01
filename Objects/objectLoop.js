let x ={
     name: "John",
     company: "Microsoft",
     salary: 4000000,
     age: 24,
     city: "Bengaluru",
     team: "Azure storage",
     designation: "Software Engineer"
};
 // loop over an object
for(const entry of Object.entries(x)) {
     console.log(entry);
}

 // there is one more way using for .. in loop
 // for in loop actually helps us loop over keys

for(const keys in x) {
    console.log(keys, x[keys]);
}


//Q. given an array of strings, Print all the unique strings in the array

function unique (arr){
    var obj={};
    for(const elem of arr){
        if(!obj[elem]){   //if not undefined
            obj[elem]=true;
        }  
    }
    console.log(Object.keys(obj))
}

let arr=["John", "Mohit", "John"];
unique(arr);