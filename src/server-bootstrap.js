var multer = require('multer');
var upload = multer();

var log = msg => console.log("  [Bootstrap] " + msg)
var logline = msg => console.log("\n-------- [Bootstrap] " + msg + "---------------------------------")

var registerMiddleware = function(app) {
    logline("Registering Middleware")
    // Body Parser
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

var registerRoutes = function(app, config) {
    logline("Registering Routers")

    var routers = (config.routers && Object.keys(config.routers).length > 0)
        ? config.routers
        : { "/" : require('./router/sample-router') };

    Object.keys(routers).forEach(path => { 
        log(`ROUTER : Registering [${path}]`)
        app.use(path, routers[path])
    })

}


var bootstrap = function(config) {
    // Configuracion
    config = config || {}
    config.port = config.port || 3000

    // Imports necesarios
    var app = require('express')();
    
    // Middleware
    registerMiddleware(app)

    // Routes
    registerRoutes(app, config)

    // Inicia el servidor
    logline("Starting server")
    return new Promise((resolve, reject) => {
        app.listen(config.port, () => {
            log(`Server started on port ${config.port}`)
            resolve(app)
        })
    })
}

exports.bootstrap = bootstrap