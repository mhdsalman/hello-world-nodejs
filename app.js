const express = require('express');
const app = express();


app.get('/hello/world', (req, res)=>{
    res.send('Hello World');

});

app.listen(5000);