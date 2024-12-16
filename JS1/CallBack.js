function add(a,b){
  console.log(a+b)
}
function multi(a,b){
  console.log(a*b)
}
function cal(a,b,callback){
  // console.log(`Calculated valus is `)
  callback(a, b);
}
cal(3,5,add)