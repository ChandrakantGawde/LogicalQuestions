var a = 10;
var b = 20;

function Swap(a, b){

    // Swap using 3rd variable 
    //  let temp;
    //  temp = a;
    //  a=b;
    //  b= temp;

    // Swap using 2 variables

    // a = a+b; // 30
    // b = a-b; // 10;
    // a = a-b; // 20

    a = a*b; // 200
    b = a/b; // 10
    a = a/b; // 20


     console.log(`After Swap A is ${a} and B is ${b}`)
};

Swap(a, b);
