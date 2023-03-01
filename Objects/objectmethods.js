/**
 Object.entries () Method
This the third method known as Object.entries() another method that can be used for traversing an array..
Object.entries() gives outputs of an array of arrays that consists of each inner array having two elements. The first
element is considered being the property and the second element is the value.
The Object.entries() method returns an array of a given object's own 
enumerable string-keyed property [key, value] pairs. 
This is the same as iterating with a for...in loop, 
except that a for...in loop enumerates properties in the prototype chain as well.
The order of the array returned by Object.entries() is the same as that provided by a for...in loop.

Syntax:
Object.entries(obj)

Parameters:
obj
The object whose own enumerable string-keyed property [key, value] pairs are to be returned.

Return value:
An array of the given object's own enumerable string-keyed property [key, value] pairs.
 */

const obj = { 
    foo: 'bar', 
    baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object with random key ordering
const anObj = { 
    100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// returns an empty array for any primitive type except for strings (see the above example), 
//since primitives have no own properties

console.log(Object.entries(100)); // [ ]