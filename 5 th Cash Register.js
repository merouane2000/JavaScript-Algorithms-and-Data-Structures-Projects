const casemony=["ONE HUNDRED","TWENTY","TEN","FIVE","ONE","QUARTER","DIME","NICKEL","PENNY"];
const moneydict = {
 "PENNY":1,
"NICKEL":5,
"DIME":10,
"QUARTER":25,
"ONE":100,
"FIVE":500,
"TEN":1000,
"TWENTY":2000,
"ONE HUNDRED":10000
}
const takeoutmony=(amnt, cidobj , changetogive,moneytype)=>{
  if(amnt>=moneydict[moneytype] && cidobj[moneytype]){
    if(amnt>=cidobj[moneytype]){
      const amntsub=cidobj[moneytype];
      amnt -= amntsub;
      changetogive.push([moneytype,amntsub/100]);
      cidobj[moneytype]=0;
    } else{
      const amntsub= Math.floor(amnt/moneydict[moneytype])*moneydict[moneytype];
      amnt -= amntsub;
      changetogive.push([moneytype , amntsub/100]);
      cidobj[moneytype] -=amntsub;
    }
  }
  return [amnt,cidobj,changetogive]
}


function checkCashRegister(price, cash, cid) {
  let amnt = Math.round((cash-price)*100);
  let cidobj  = cid.reduce((acc,[moneytype,amnt])=>{
    return {
      ...acc,
      [moneytype] :Math.round(amnt*100)
    }
  },{});
  let changetogive=[];

  casemony.forEach(moneytype =>{
    [amnt,cidobj,changetogive]=
    takeoutmony(amnt, cidobj , changetogive , moneytype);

  });
  if (amnt > 0 ){
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }
  const kilo = Object.values(cidobj).reduce((acc,amnt)=>acc+amnt,0)
  if (kilo > 0 ){
    return {status: 'OPEN', change: changetogive};
  }
    return {status: "CLOSED", change: cid};



}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
 ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
 ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 // return { status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }.