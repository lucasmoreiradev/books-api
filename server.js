const http = require('http')
const app = require('./app')
const fs = require('fs')

const httpServer = http.createServer(app)
const PORT = process.env.PORT || 9000

httpServer.listen(PORT)
httpServer.on('error', err => console.log(err))
httpServer.on('listening', () => {
  console.log(`Express server listening on ${PORT}`)
  const json = [{"id": "1e876552-d028-6e00-61a1-eb1e0bfd6cfe","name":"O Poder da Ação -  Faça sua vida sair do papel","author":"Paulo Vieira","pages":250}]
  fs.writeFileSync('./books.json', JSON.stringify(json))
})

