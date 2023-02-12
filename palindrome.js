let str = "nayan";
let bag ="";

for (let i = str.length - 1; i >= 0; i--) {
  bag += str[i];
}
if (bag == str)
  console.log("palindrome")
else {
  console.log("Not palindrome")
}