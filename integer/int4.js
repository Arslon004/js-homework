let a = Number(prompt("3 xonali son kiriting"));
let birinchiRaqam=Math.floor(a/100);
let oxirgiRaqam=a %10;
let ikkinchiRaqam=a % 100;
let ikkinchi=(ikkinchiRaqam-oxirgiRaqam);
let yangiSon=ikkinchi*10+birinchiRaqam*10+oxirgiRaqam;
console.log(yangiSon)