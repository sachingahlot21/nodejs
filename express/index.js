
const express = require('express')
const app = express()

app.get('/' , (req,res)=>{
    return res.send("hello this is homepage")
})

app.get('/about' , (req , res)=>{
    return res.send("hello this about page")
})

//const myServer = http.createServer(app)
app.listen(8000 , ()=> console.log('server started'))