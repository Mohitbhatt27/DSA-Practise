/*
JS is actually sort of parsed before getting line by line executed.
*/
var teacher="Sanket";
function fun(){
    teacher="pulkit";
    console.log("Hello", teacher);
}
function gun(){
    var student="Tanmany";
    console.log(student);
}
fun();
gun();

/*
first the whole code is once read, lexical scope analysis. 
During this lexical scope analysis feature, JS will look through the code
and the moment it finds a variable it will try to look for its scope
and if the scope is not assigned, it will try to assign the scope
1. teacher gets global scope
2. fuction gun() gets global scope
3. then new teacher is assigned scope of fun
4. function gun will get global scope
5. students get assigned to the scope of gun
6. fun is already in the global scope, do nothing
7. gun is already in the global scope, do nothing
PARSING STEP DONE
EXECUTION STEP BEGINS FROM THE TOP

*/

var z=2; //global scope
function ok(){
    var z=3; //function scope
    console.log(z); 
}
ok();

//if there was no line 35, then it will look outside the bracket. and print 2

var za=2; //global scope
function oka(){
    //var za=3; //function scope
    console.log(z); 
}
oka();

let emi=2;
function e(){
    console.log (emi);
}
//let emi=3;
e();

//strict mode avoids the creation of autoglobal variable
