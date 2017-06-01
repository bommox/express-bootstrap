var server = require('./src/server-bootstrap')
var config = require('./server-config')

// Rutas
config = config || {}
config.routers = config.routers  || {} 

config.routers['/myapp'] =  require('./src/router/sample-router')
config.routers['/'] = require('./src/router/test-router')


// Se inicia el servidor
server.bootstrap(config).then(app => {
    // callback
    console.log("SERVER STARTED - PARAMS")
    console.log(JSON.stringify(app.locals))
}).catch(e => console.error("Error starting server : " + e))