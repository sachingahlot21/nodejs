const User = require('../models/user')

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({})

    const html =
        `<ul>
        ${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
        </ul>
        `;

    return res.send(html)
}

async function handleUpdateUsers(req,res){
 
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
}

module.exports = {
    handleGetAllUsers,
    handleUpdateUsers,
}