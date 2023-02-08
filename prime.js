let n=7;
let count=0;

for(let i=1; i<=n; i++){
  if(n%i==0){
     count++;
  }
}
if(count==2){
  console.log("Prime Number");
}
else{
  console.log("Not a Prime Number");
}
