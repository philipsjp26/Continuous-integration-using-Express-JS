require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { SERVER_PORT, SERVER_HOST } = process.env;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`@philipsjp26 listening server at http://${SERVER_HOST}:${SERVER_PORT}`);
})

module.exports = app;
