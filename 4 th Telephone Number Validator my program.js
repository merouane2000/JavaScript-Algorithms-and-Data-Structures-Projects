function telephoneCheck(str) { 
  var x=0;
 var v1=[x, x, x,'-', x, x, x, '-', x, x, x, x];
  var v2=['(',x,x,x,')',x,x,x,'-',x,x,x,x];
  var v3=['(',x,x,x,')','', x,x,x,'-',x,x,x,x];
  var v4 = [x,x,x,'',x,x,x,'',x,x,x,x];
  var v5=[x,x,x,x,x,x,x,x,x,x];
  var v6 = [1,'',x,x,x,'',x,x,x,'',x,x,x,x];

 var arr = [];
     arr = str.split("");
     for (let i in arr){
       if (arr.includes("-")){ 
         
         for(let j in v1 ){
           if ((typeof(arr[i]))===(typeof(v1[j]))){
             return true; }
             else{
               return false;
             }}

       } else if ( arr.length === 9) {

         for (let j in v5){
           if(typeof(arr[i]) === typeof(v5[j])){
             return true;}
              else{
               return false;
             }}
         
       } else if ( arr.includes("(","")){
  for (let j in v3){
           if (typeof(arr[i]) === typeof(v3[j])){
             return true;
           } else{
               return false;
             }
         }
       

       } else if ( arr.includes("(","-")){
          for (let j in v2){
           if (typeof(arr[i]) === typeof(v2[j])){
             return true;
           } else{
               return false;
             }
         }

       } else if ( arr.includes("")){
          for (let j in v4){
           if(typeof(arr[i]) === typeof(v4[j])){
             return true;
           } else{
               return false;
             }
         }

       }else if(arr[0] === v6[0] && arr[0]>0) {
         {
             for (let j in v6){
             if (typeof(arr[i]) === typeof (v6[j])){
               return true;
             } else{
               return false;
             }
           }
         }

       }

     }
     return false;
   


}

console.log(telephoneCheck("1 456 789 4444"));