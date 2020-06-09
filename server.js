    const express = require('express')
    app = express()
    bodyParser = require('body-parser')
    port = process.env.PORT || 5000

    app.listen(port);

    console.log('API server started on: localhost:' + port);

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var routes = require('./routes/routes'); //importing route
    routes(app); //register the route