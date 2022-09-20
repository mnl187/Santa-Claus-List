const express = require("express");
const methodOverride = require("method-override");
const hbs = require("express-handlebars");

const app = express();

app.use(methodOverride('method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
// app.use(express.json());
app.engine('.hbs', hbs({
    extname: '.hbs',
    // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');