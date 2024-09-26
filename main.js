const math=require('./math');//using a math const variable accessing the other file

console.log(math.add(3,4));
console.log(math.sub(8,4));
console.log(math.mul(7,8));
console.log(math.divi(8,2));


console.log("---------");
const {add,sub,mul,divi}=require('./math'); //using the d structure

console.log(add(3,4));
console.log(sub(8,4));
console.log(mul(7,8));
console.log(divi(8,2));
