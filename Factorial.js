function Factorial(no){

    let factorial = 1;

    for(let i = 1; i <= no; i++){
        factorial = factorial * i;
    }

    console.log("Factorial is ", factorial)
}
Factorial(5)