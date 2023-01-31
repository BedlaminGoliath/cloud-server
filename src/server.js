const express = require('express');
const server = express();
const PORT = 3000;

server.get('/', (req,res)=>{
    res.send('Hello World')
})

server.listen(PORT,()=>{
    console.log(`Hello from port ${PORT}`);
})