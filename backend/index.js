const express = require("express")
const cors = require("cors")
const app = express()
const port = 5000

app.use(cors())
app.use(express.static('public'))
app.get("/user",(req,res)=>{
    console.log(req)
    const user = {
        name:"john doe",
        email:"johndoe@email.com"

    }
    userInfo = `
    <p>user name:${user.name} ,<br> user email: ${user.email}</p>
    `
    res.send(userInfo)
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})