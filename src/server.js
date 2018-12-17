const logger = require('./common/logger')('server')
//var multer = require('multer');
//var upload = multer();

const registerMiddleware = function(app) {
    logger.log("Registering Middleware")
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

var registerRoutes = function(app, config) {
    logger.log("Registering Routers")

    var routers = (config.routers && Object.keys(config.routers).length > 0)
        ? config.routers
        : { "/" : require('./router/sample-router') };

    Object.keys(routers).forEach(path => { 
        logger.log(`ROUTER : Registering [${path}]`)
        app.use(path, routers[path])
    })
}


function server(config) {
    // Configuracion
    config = config || {}
    config.port = config.port || 3000

    // Imports necesarios
    const app = require('express')();
    
    // Middleware
    registerMiddleware(app)

    // Routes
    registerRoutes(app, config)

    function start() {
        logger.log("Starting server")
        return new Promise((resolve, reject) => {
            app.listen(config.port, () => {
                logger.log(`Server started on port ${config.port}`)
                resolve(app)
            })
        })
    }

    return {
        start
    }
}

module.exports = server