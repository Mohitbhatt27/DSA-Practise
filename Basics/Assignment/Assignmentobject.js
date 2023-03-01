/*
Program to clone the object and change the property and then iterate the array of objects using inbuilt functions and to console the object property and frame a meaning full sentence.
*/

let originalObject = {
    name: "John",
    age: 25
    }
    
    // Clone the object
    let clonedObject = {...originalObject};
    
    // Change the property in the cloned object
    clonedObject.age = 30;
    
    // Define the array of objects
    let objectArray = [originalObject, clonedObject];
    
    // Use the forEach method to iterate over the array of objects
    objectArray.forEach(object => {
    // Console the object property
    console.log(`Name: ${object.name}, Age: ${object.age}`);
    
    // Create a meaning full sentence using the object property
    let sentence = `${object.name} is ${object.age} years old.`;
    console.log(sentence);
    });