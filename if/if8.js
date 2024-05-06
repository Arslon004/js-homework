let a = Number(prompt("1-sonni kiriting"));
let b = Number(prompt("2-sonni kiriting"));
let c = Number(prompt("3-sonni kiriting"));
if (a + b > c && a + c > b && b + c > a) {
  console.log("yes");
} else {
  console.log("No");
}
