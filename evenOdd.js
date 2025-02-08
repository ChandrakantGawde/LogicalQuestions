
function EvenOdd(no){
    let even = 0;
    let odd = 0;
    while( no > 0){
       let digit = no % 10;

       if(digit % 2 == 0 ){
        even++
       }else{
        odd++
       }

       no = Math.floor(no / 10);
    }
    console.log(`Even digits ${even} and Odd digits ${odd}`)
}

EvenOdd(1234);