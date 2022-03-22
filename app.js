const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const middlwareRouter = require('./middleware/authMiddleware')
const userSystemRouter = require('./routes/userSystem')
const bizSystemRouter = require('./routes/bizSystem')

mongoose.connect('mongodb://localhost/projectNodejs')
    .then(()=> console.log({ msg: "Connected to db"}))
    .catch(err => console.log(err))

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', userSystemRouter)
app.use('/biz', middlwareRouter, bizSystemRouter)

module.exports = app;