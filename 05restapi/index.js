const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require('fs')

const app = express()

const PORT = 8000

app.use(express.urlencoded({extended : false}))

app.get('/users', (req, res) => {

    const html =
        `<ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
        `;

    return res.send(html)
})

app.get('/api/users', (req, res) => {
    return res.json(users)
})

app
.route('/api/users/:id') 
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    if (id > users.length)
        return res.send("user didnt exist")
    else
        return res.json(user)
})
.patch((req,res)=>{
    const body = req.body
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    const updatedUser = {id: id ,  ...body}
    // updatedUser.id = id
    user[id] = updatedUser
    

    // console.log("body :" ,body.first_name , id , user.first_name)
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err,data)=>{
        return res.json({status : 'succes' , updatedUser})
    })
})
.delete((req,res)=>{
    return res.json({status : 'pending'})
})

app.post('/api/users' , (req,res)=>{
    const body = req.body;
    users.push({ id: users.length + 1 , ...body ,});
    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users) , (err,data)=>{
        return res.json({status : 'succes' , id: users.length})
    })
    // console.log("body :" ,body)
    // return res.json({status : 'pending'})
})

app.listen(PORT, () => console.log(`server started at port ${PORT}`))