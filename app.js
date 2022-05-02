const express = require('express');
const app = express();
const path = require ('path')
app.use(express.static('public'));


app.listen(3002, () => {
    console.log('Server listening on port 3002');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/index.html');
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/login.html'));
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/productCart.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/productDetail.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/register.html'));
});

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 not found <br> Tenemos un problema</h1>');
    });