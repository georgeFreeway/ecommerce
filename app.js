const express = require('express');
const ejs = require('ejs');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: "ecommerce website"});
});

app.get('/about', (req, res) => {
    res.render('about', {title: "about us"});
});

app.listen(port, () => {
    console.log('server running on port 3000');
});