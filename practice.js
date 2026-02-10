const fs=require('fs')

fs.writeFile('./hello.txt', "HELLO WORLD",()=>{
    console.log("WRITTEN FIRST BUT EXECUTED IN LAST");
})
console.log('a')
console.log('b')
console.log('c')