
function Fibonachi(n){

    let d1= 0;
    let d2= 1;
    let sum = 0;

    console.log(d1,"\n",d2)
    for(let i=2 ; i<n ; i++){
        sum = d1 + d2;
        d1= d2;
        d2=sum;
        console.log(sum)
    }

}
Fibonachi(n= 10);