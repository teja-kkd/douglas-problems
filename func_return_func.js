
let identity = function (args){
    /*
        returns passed number to the function
        @params {Number} args
        @return {Number} args

    */
    return args;
}

console.log("\n Result of identity function with (2) as parameter: "+ identity(2)+'\n');

let add = function(args1,args2){
    /*
        Adds two numbers
        @params {Number} args1
        @params {Number} args2
        @return {Number} sum of args
    */
    return args1+args2;
}

console.log("\n Result of add function with (2, 2) as parameters : "+ add(2,2)+'\n');

let mul = function(args1,args2){
/*
    Multiplies two numbers
    @params {Number} args1
    @params {Number} args2
    @return {Number} Multiplication of args
*/
    return args1*args2;
}

console.log("\n Result of mul function with (2, 3) as parameters : "+ mul(2,3)+'\n');

let sub = function(args1,args2){
/*
    Subtracts two numbers
    @params {Number} args1
    @params {Number} args2
    @return {Number} Subtraction of args
*/
    return args1-args2
}

console.log("\n Result of sub function with (2, 2) as parameters : "+ sub(2,2)+'\n');

let identityf = function(args){
    /*
        Returns an identity function with args passed to the identity function
        @params {Number} args
        @return {Function}identity
    */
    return function(){
        return (args)
    }
}
console.log("\n Result of identityf function with (2) as parameter: "+ identityf(2)()+'\n');

let addf = function(args1){
    /*
        returns an add function by passing parameters in two invocations
        @params {Number} args1
        @params {Number} args2
        @return {function} sum of args
    */
        return function(args2){
        
            return add(args1,args2)
        }
    
}
console.log("\n Result of addf function with (2,3) as parameters: "+ addf(2)(3)+'\n');

let liftf = function(ops){
    /*
        Takes a binary function, and makes it callable with two invocations.
        @params{function}ops
        @params{Number}args1
        @params{Number}args2
        @result {function} ops function with two params passed
    */
    return function(args1){
        return function(args2){
            return ops(args1,args2);
        };
    };
}
console.log("\n Result of liftf function with (2,3) as parameters and mul as operator: "+ liftf(mul)(2)(3)+'\n');

let curry = function(ops, args1){
    /*
        takes a binary function and an argument, and returns a function that can take a second argument.
        @params{function}ops
        @params{Number}args1
        @params{Number}args2
        @result {function} ops function with two params passed
    */
    return function(args2){
        return ops(args1,args2)
    }
}
console.log("\n Result of curry function with (2,3) as parameters and sub as operator: "+ curry(sub,2)(3)+'\n');

let twice = function(ops){
    /*
        takes a binary function as an argument, and returns a  unary function that can take an argument.
        @params{function}ops
        @params{Number}args
        @return {function} unary function with ops on params passed
    */
    return function(args){
        return ops(args,args);
    };
}
console.log("\n Result of twice function with (11) as parameters and mul as operator: "+ twice(mul)(11)+'\n');

let reverse = function(ops){
    /*
        takes a binary function and args as arguments, and returns a  binary function with args reversed.
        @params{function}ops
        @params{Number}args1
        @params{Number}args1
        @return {function} binary function with ops on params passed
    */
    return function(args1,args2){
        return ops(args2,args1);
    };
}
console.log("\n Result of reverse function with (2,3) as parameters and sub as operator: "+ reverse(sub)(2,3)+'\n');

let composeu = function(ops1,ops2){
    /*
        takes a two unary functions and return a unary function  that calls them both
        @params{function}ops1
        @params{function}ops2
        @params{Number}args
        @return {function}  function with ops on params passed
    */
    return function(args){
        return ops2(ops1(args));
    };
}
console.log("\n Result of composeu function with (2) as parameter and (twice,square) as operators: "+ composeu(twice(add),twice(mul))(6)+'\n');