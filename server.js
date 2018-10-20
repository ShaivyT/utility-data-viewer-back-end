'use strict';

const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "https://utility-data-viewer-front-end.herokuapp.com");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

console.log("Server Started");

const utilityService = require('./services/utility.service.server');
utilityService(app);

app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});