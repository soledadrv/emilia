const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
app.get('/music',(req,res) => res.sendFile(path.join(__dirname,'views','music.html')));
app.get('/contact',(req,res) => res.sendFile(path.join(__dirname,'views','contact.html')));


app.listen(port,() => console.log('Servidor funcionando en el puerto ' + port));