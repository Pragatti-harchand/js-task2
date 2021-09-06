let billAmount=prompt("enter the bill amont");
let bill=parseInt(billAmount);
console.log(`Bill Amount: ${billAmount}`);
let tip=(bill<300)?bill*15/100:bill*20/100;
console.log( `tip:${tip}`);
 let totalBill=tip+bill;
console.log(`totalBill:${totalBill}`);

