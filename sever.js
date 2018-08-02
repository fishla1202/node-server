const express = require('express');
const hbs = require('hbs');
const port = process.env.PORY || 3000;
let app = express();

hbs.registerPartials('./views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('testUp', (text) => {
   return text.toUpperCase();
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    })
});

app.listen(port, () => {
    console.log(`open in port: ${port}`);
});