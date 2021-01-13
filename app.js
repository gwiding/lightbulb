const express = require ("express");
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

let lightOn = [
    {isOn:"true"}
    ]

app.get("/", (req, res)=>{
    res.send (lightOn)
})

app.put("/", (req,res) =>{
    const switchA =req.body;
    console.log(switchA)
    lightOn[0].isOn = switchA
    res.status(200).send("IsOn/Off")
})

// app.post("/", (req,res) =>{
//     const switchA =req.body;
//     lightOn.unshift(switchA)
//     res.status(200).send("IsOn/Off")
// })



app.listen(3000, ()=> console.log("server running on port 3000..."))