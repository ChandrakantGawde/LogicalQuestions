
function GetPrime(){
   let no = 3;
   let count = 0;
   if(no > 1){
      for(let i = 1 ; i<= no ; i++){
         if(no%i == 0){
            count++;
         }
        }

        if(count == 2){
         console.log("Prime Number")
        }else{
         console.log("Not Prime Number");
        }
        
   }else{
      console.log("Not Prime Number");
   }
}
GetPrime()