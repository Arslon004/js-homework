let n=Number(prompt("n sonini kiriting"));
if(n>0 && n<=99){
  let a=Math.floor(n/10);
  let b=n % 10;
  console.log(a+b);
}else if(n>=100 && n<=999){
  let a=Math.floor(n/100);
  let b=n % 10;
  let c=(((n % 100)-b)/10);
  console.log(a+b+c);
}