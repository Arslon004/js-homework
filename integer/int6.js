let r=Number(prompt("0 dan 1000 gacha bo'lgan r sonn kiriting"));
let n=Number(prompt("0 dan 1000 gacha bo'lgan n sonni kiriting"));
let a=Number(prompt("0 dan 1000 gacha bo'lgan a sonni kiriting"));
let b=Number(prompt("0 dan 1000 gacha bo'lgan b sonni kiriting"));
let surat=Math.pow((1+(r/100)),n);
let maxraj=Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));
let result=surat/maxraj;
console.log(result);