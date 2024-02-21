const express = require('express')
const {connectMongoDb} = require('./connection')
const router = require('./routes/user')
const app = express()
const PORT = 8000

//connection
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=> console.log("MONGODB CONNECTED !"))
.catch((err) => console.log("error : " , err))

//middleware
app.use(express.urlencoded({extended : false}))

//routes
app.use('/api/users' , router)

app.listen(PORT , ()=> console.log(`app started at port : ${PORT}`))