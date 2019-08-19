const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();
mongoose.connect("mongodb+srv://wallace:abcd@1234@cluster0-q2boj.mongodb.net/test?retryWrites=true&w=majority",
    {
     useNewUrlParser: true   
    });
server.use(express.json());
server.use(routes);



server.listen(3333);