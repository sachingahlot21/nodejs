const fs = require("fs");
const os = require('os')
console.log(os.cpus().length)

//write by writeFileSync
//fs.writeFileSync('./contacts.txt' , 'hello world')

//write by writeFile
// fs.writeFile('./test.txt' , "hello async" , (err)=>{})

//read by readFileSync
// const result  = fs.readFileSync('./contacts.txt' , 'utf-8')
// console.log(result)

//read by readFile
// fs.readFile('./contacts.txt' , 'utf-8', (err,res)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }

// })
