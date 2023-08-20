const  http = require('http')


const HOSTNAME = 'localhost'
const PORT = 8000

// 1. Cerate simpls http server
// 

// function requestHandler(request, response) {
//     console.log(request)
    
// }
    
// const server= http.createServer(requestHandler)


// server.listen(PORT, HOSTNAME, (requestHandler) => {
// console.log (`server started sucessfully at http://${HOSTNAME}:${PORT}`)

// }) 

// 2. Return 'Hello World'


function requestHandler(request, response) {
    console.log(request)
    response.end('Hello world')
    
}

const server= http.createServer(requestHandler)
    
server.listen(PORT, HOSTNAME, () => {
console.log (`server started sucessfully at http://${HOSTNAME}:${PORT}`)

}) 





