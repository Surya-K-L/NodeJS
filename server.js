console.log("hai");

const os=require('os');
const path=require('path');
console.log(os.type()); //os type like Windows_NT
console.log(os.version());//Windows 11 
console.log(os.homedir());//C:\Users\my pc


console.log(__dirname); //directory name
console.log(__filename); // file name

console.log("------");
console.log(path.dirname(__filename));//this also produces the same output as above
console.log(path.basename(__filename));//base name 
console.log(path.extname(__filename));//extension name


console.log(path.parse(__filename));//print as an object

