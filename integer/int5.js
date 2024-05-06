let a=Number(prompt("0 dan 1000 gacha bo'lgan sonlarni kiriting"));
let b=Number(prompt("0 dan 1000 gacha bo'lgan sonlarni kiriting"));
let result=((9*(Math.pow(a,2))*b)-(27*(Math.pow(a,2))*(Math.pow(b,2)))+15*(Math.pow(b,2)))*100;
let natija=Math.round(result)
console.log(natija/100);
