const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require('path');
const logica = require('./services/logica')
require('dotenv').config()
const { pool } = require('./config');
const { createServer } = require("http");

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(session({
    secret: 'juan the keyboard cat',
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 //una semana
    },
    saveUninitialized: false
}));
app.use(cookieParser());

app.get('/hola', (req, res) => {
    res.status(200).json({mensaje: 'holaaaaa!'})
})

app.post('/cafes/info', logica.infoCafeteria)

app.post('/cafes/menu', logica.getProducts)


// Start server
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening in ${process.env.PORT || 3002}`)
})