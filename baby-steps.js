const process = require('process');

var args = process.argv;
var sum=0
for (let index = 2; index < args.length; index++) {
    const element = parseInt(args[index]) ;
 sum = sum + element
}
console.log(`${sum}`)
