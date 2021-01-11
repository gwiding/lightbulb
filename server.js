//HTTP object

const http = require("http")
const server = http.createServer()

server.on("connection", (socket) =>{
    console.log("Some one entered localhost 3000")
})

server.listen(3000);
console.log("Is listening on port 3000"