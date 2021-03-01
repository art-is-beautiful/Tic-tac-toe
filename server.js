const express = require('express');

const app = express();

const PORT = 5000;

const server = app.listen(PORT);

app.use(express.static('public'))

try{
    console.log('Localhost is running on - ' + PORT)
}catch(e){
    console.log(e.message);
}