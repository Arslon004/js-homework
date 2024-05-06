let a = Number(prompt("3 xonali son kiriting"));
let birinchiRaqam = Math.floor(a / 100);
let ikkinchiRaqam = a % 100;
let oxirgiRaqam = a % 10;
let ikkinchi = ikkinchiRaqam - oxirgiRaqam;
let yangiSon = oxirgiRaqam * 100 + ikkinchi + birinchiRaqam;
console.log(yangiSon);
