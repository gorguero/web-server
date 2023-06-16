const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const app = express()

//Servir contenido estatico
app.use( express.static('public') );

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elemnts', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
});
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});



app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});