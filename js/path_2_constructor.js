function doSomeMath(){
    var a = 5;
    var b = 4;
    var sum = a + b;

    //return sum;
    function multiply(){
        var result = a*b;
        return result;

    }

    return multiply;
}

var theResult = doSomeMath();

console.log("The result is ",theResult());

//there is nothing new here

//until we add function in function and that function rely on the outsider variables.

