const http = require('http')

const childServer = http.createServer((req,res) => {
    if(req.url === '/text'){
        res.end('text')
    }else if(req.url === '/error'){
        throw '错误'
    }else{
        res.end('ok')
    }
})


process.on('uncaughtException',(error,origin) => {
    console.log(error,origin)
    process.send({msg:error})
})

process.on('message',(flag,server) => {
    if(flag === 'server'){
        server.on('connection',socket => {
            childServer.emit('connection',socket)
        })
    }
})
