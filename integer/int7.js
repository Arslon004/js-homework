let x1=Number(prompt(" x y kordinatadan x1 nuqta kiriting "));
let y1=Number(prompt(" x y kordinatadan y1 nuqta kiriting"));
let x2=Number(prompt(" x y kordinatadan x2 nuqta kiriting"));
let y2=Number(prompt(" x y kordinatadan y2 nuqta kiriting"));
let distance=Math.sqrt((Math.pow((x2-x1),2))+(Math.pow((y2-y1),2)))*100;
let integrity=Math.round(distance);
console.log(integrity/100);