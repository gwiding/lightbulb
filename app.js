const express = require ("express");
const app = express()
const cors = require("cors")
// const Datastore = require("nedb"),
// db = new Datastore({filename: "databse.db"});
// app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.use(express.static("public"));


// db.loadDatabase((err) =>{
// if(err){
//     console.log("Databse error")
// }
// })

let lightOn = [
    {isOn:"true"}
    ]

    // db.insert(lightOn)

app.get("/api", (req, res)=>{
    res.send (lightOn)
    // res.sendFile(__dirname + "/public/index.html");
   
})

app.put("/api", (req,res) =>{
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



app.listen(process.env.PORT || 3000, ()=> console.log("server running..."))