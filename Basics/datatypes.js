let undefined_datatype=undefined;
let number_variable=1234.87;
let bool_variable=true;
let null_variable=null;
let string_variable="This is a string";
let multiline_string=`This
                      is
                      a
                      multiline string`;

 let big_int_variable=1234567890n; 
 let symbol_variable=Symbol("Avengers");
 let object_variable={"key":"value"};                    

console.log(undefined_datatype, 
    number_variable, 
    bool_variable, 
    null_variable, 
    string_variable, 
    multiline_string,
    big_int_variable,
    symbol_variable,
    object_variable);

    console.log(typeof number_variable);
    console.log(typeof undefined_datatype);
    console.log(typeof bool_variable);
    console.log(typeof null_variable);
    console.log(typeof string_variable);
    console.log(typeof big_int_variable);
    console.log(typeof symbol_variable);
    console.log(typeof object_variable);
