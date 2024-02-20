const express = require('express')
const app = express()
const PORT = 8000
app.use(express.urlencoded({extended : false}))
const mongoose = require('mongoose')

//connection
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=> console.log("MONGODB CONNECTED !"))
.catch((err) => console.log("error : " , err))

//schema
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    jobTitle : {
        type : String
    },
    gender : {
        type : String
    }
})

const User = mongoose.model('user' , userSchema)



app.post('/api/users' , async (req,res)=>{
    const body = req.body;
    
    if(!body ||
       !body.first_name ||
       !body.last_name ||
       !body.email ||
       !body.gender||
       !body.job_title 
     )
     {
        return res.status(400).json({msg : "All fields are required..."})
     }

     const result  = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.job_title

     });
     console.log("result : " , result);
     return res.status(201).json({msg: "success"});
    // console.log("body :" ,body)
    // return res.json({status : 'pending'})
})

app.get('/users' , async (req,res) =>{
    const allDbUsers = await User.find({})

    const html =
        `<ul>
        ${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
        </ul>
        `;

    return res.send(html)
})


app.listen(PORT , ()=> console.log(`app started at port : ${PORT}`))