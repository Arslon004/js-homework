let a=Number(prompt("1-sonni kiriting"));
let b=Number(prompt("2-sonni kiriting"));
let c=Number(prompt("3-sonni kiriting"));
let max=Math.max(a,b,c);
let min=Math.min(a,b,c);
if(a !== max && a !==min){
  console.log(a);
}else if(b !==max && b !== min){
  console.log(b);
}else{
  console.log(c)
}