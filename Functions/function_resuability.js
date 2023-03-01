let add=(a,b) => a+b;
let print=(a,b,sum) =>{
    console.log(`First number is ${a}`);
    console.log(`Second number is ${b}`);
    console.log(`Sum of ${a} and ${b} is ${sum}`);
}

const a=10, b=20;
print(a,b,add(a,b));

print(23,67,add(23,67));