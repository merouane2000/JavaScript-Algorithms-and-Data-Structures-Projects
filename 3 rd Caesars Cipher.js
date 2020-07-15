CaesarsCipher=(str)=>{
    var nrarr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","+","?", "!","."] ;
    var cae = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","+" , "?" , "!" , "."];
    var arr = [];
    for (let y in str){
       str= str.replace(" " , "+");
    }
    arr=str.split("");
    var rslt = [];
    for(let i in arr){
        for(let j in cae){
            if(arr[i].includes(cae[j])){
                rslt.push(nrarr[j]);

            } else if (!arr[i].includes(cae[j])){
                if (arr[i] === nrarr[j]){
                    rslt.push(cae[j]);
                }
            }
        }
    }
    rslt=rslt.join("");
    while(rslt.includes("+")){
       rslt= rslt.replace("+" , " ")
    }
    return rslt;

}
console.log(CaesarsCipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// return THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.