convertToRoman=(num)=>{
    var decarr = [1000  , 900 , 500 , 400 , 100 ,90 , 50 , 40 ,10 , 9 ,5 , 4 , 1];
    var romnarr = ["M" , "XM" , "D" , "CD" , "C", "XC" ,"L" ,"XL" , "X" , "IX", "V" , "IV" , "I"] ;
     var rslt = "";
     for (let i in decarr){       //Using a for loop, we loop through the indicies of the decimalValue array.
                                  // We continue to loop until while the value at the current index will fit into num.
                                  //  Next, we add the roman numeral and decrease num by the decimal equivalent.
         while (decarr[i] <= num){
             rslt += romnarr[i];
             num -= decarr;
         }
     }
     return rslt ; 

}
console.log(convertToRoman(3999)); // return MMMCMXCVIV.