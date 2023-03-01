/*
JS object is a non primitive datatype which allows to store multiple collections of data
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.
*/

/*
Objects are variables too. 
But objects can contain many values.
Object values are written as name : value pairs 
(name and value separated by a colon).

*/

let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

/*
A JavaScript object is a collection of named values.
It is a common practice to declare objects with the const keyword.
*/

const person1 = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

/*
The named values, in JavaScript objects, are called properties.
Property	Value
firstName	John
lastName	Doe
age	        50
eyeColor	blue
*/

/*
Object Methods
Methods are actions that can be performed on objects.
Object properties can be both primitive values, other objects, and functions.
An object method is an object property containing a function definition.
*/

//JavaScript objects are containers for named values, called properties and methods.

//Creating a JavaScript Object
//Using an Object Literal

const person2 = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

//This example creates an empty JavaScript object, and then adds 4 properties:
const person3 = {};
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";

//The following example create a new JavaScript object using new Object(), and then adds 4 properties:
const person4 = new Object();
person4.firstName = "John";
person4.lastName = "Doe";
person4.age = 50;
person4.eyeColor = "blue";


//The examples above do exactly the same.
//But there is no need to use new Object().
//For readability, simplicity and execution speed, use the object literal method.

/*JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.
If person is an object, the following statement will not create a copy of person:*/

const x = person;  // Will not create a copy of person.

/*
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.
*/

const person10 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const xyz = person10;
  xyz.age = 10;      // Will change both xyz.age and person.age

//Unassigned properties of an object are undefined (and not null).

/*
JavaScript object property names (keys) can only be strings or Symbols — 
all keys in the square bracket notation are converted to strings unless 
they are Symbols. 
*/

//RELEVEL RECORDED

const student={
    firstName: 'Shyam',
    class: 10
};

//Here student is the name of the object that stores values such as strings and numbers.

//Object declaration

/*
const object_name ={
    key1:value1,
    key2:value2,
    key3:value3,

    .
    .
    .
    keyN:valueN
};

object_name is the name of the object.
Each member of the object us a key:value pair
*/

const person5={
    name:'John',
    age: 20
};
console.log(typeof person5);

//name and age are keys, and John and 20 are values.
//key:value pairs are called properties.
//name:'John' and age:'20' are properties of the object.

//Ways to create objects
//1. Using the object literal
//2. Using the new keyword-creating an instance of object directly
//3. By using constructor function

const p={
    name:'john',
    laptop: 'dell',
    age:30,
    greet: function(){     //function inside the object
        console.log("Hello everyone");
    },
    score:{                //object inside the object
        math:90,
        science:80
    },
    hobbies:["eat","play"] //array inside the object
};

//An object literal basically uses this to create an object directly.


//2. Using the new keyboard

const objectname=new Object();

const p2=new Object({
    name:'john',
    laptop: 'dell',
    age:30,
    greet: function(){     //function inside the object
        console.log("Hello everyone");
    },
    score:{                //object inside the object
        math:90,
        science:80
    },
    hobbies:["eat","play"] //array inside the object
});

console.log(typeof p2);


//3.Object.create method creates a new object using the prototype of the given object

let student5={
    name:'lisa',
    age:24,
    marks:78
};
let std1=Object.create(student5);
std1.name="Nikhil";
console.log(std1);

//Object.create(ObjectName);

//Access object properties
//1. Using dot operator
//2. objectname[propertyName]

console.log(student5["name"]);
console.log(student5.name);
console.log(p2.score.science);
console.log(p2.greet());

//for in loop and for each loop

//for in loop

//allows to iterate over all the property keys of an object
//for(key in object){
    //body for for...objectname.in }

//In each iteration of the loop, a key is assigned to the key variable and the loop continues for all object properties

console.log("-------------------------------------------------");

let stud={
    name: "Monica",
    class:7,
    age:12
};

for(let key in stud) {
    console.log(key);
    console.log(key+ ":" + stud[key]);
}

//For each loop

//method that calls a function and iterate over the elements of an array(mostly)
//can be used for maps, sets and objects as well

let srudents=['sara', 'jack', 'saransh'];
function myfunc(item){
    console.log(item);
}
srudents.forEach(myfunc); //myfunc is being executed for each element of srudents array

