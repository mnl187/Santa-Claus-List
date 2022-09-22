const express = require("express");
require('express-async-errors');
const methodOverride = require("method-override");
const {engine} = require("express-handlebars");
const {handleError} = require("./utils/errors");
const {homeRouter} = require("./routers/home");
const {childRouter} = require("./routers/child");
const {giftRouter} = require("./routers/gift");
require('./utils/db');
const {handlebarsHelpers} = require("./utils/handlebars-helpers");

const app = express();

app.use(methodOverride('method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
// app.use(express.json());
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);


app.use(handleError);

app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
})