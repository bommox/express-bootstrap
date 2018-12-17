const server = require('../')
let config = require('./server-config')

// Rutas
config = config || {}
config.routers = config.routers  || {} 

config.routers['/myapp'] =  require('./router/sample-router')
config.routers['/'] = require('../src/router/test-router')


// Se inicia el servidor
async function start() {
    const app = await server(config).start()        
    console.log("SERVER STARTED - PARAMS")
    console.log(JSON.stringify(app.locals))
}

start()