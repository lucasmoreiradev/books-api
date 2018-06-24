const router = require('express').Router()
const fs = require('fs')
const uuid = require('uuid-with-v6')

router.get('/books', (req, res) => {
  const json = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
  res.json(json)
})

router.get('/books/:id', (req, res) => {
  const json = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
  const book = json.filter(book => book.id === req.params.id)[0]
  res.json(book)
})

router.post('/books', (req, res) => {
  let json = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
  let book = req.body
  book.id = uuid.v6()
  json.push(book)
  fs.writeFileSync('./books.json', JSON.stringify(json))
  res.json(json)
})

router.put('/books/:id', (req, res) => {
  let json = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
  const book = json.filter(book => book.id === req.params.id)[0]
  json.splice(json.indexOf(book), 1)
  book.name = req.body.name || book.name
  book.author = req.body.author || book.author
  book.pages = req.body.pages || book.pages
  json.push(book)
  fs.writeFileSync('./books.json', JSON.stringify(json))
  res.json(book)
})

router.delete('/books/:id', (req, res) => {
  let json = JSON.parse(fs.readFileSync('./books.json', 'utf8'))
  const book = json.filter(book => book.id === req.params.id)[0]
  json.splice(json.indexOf(book), 1)
  fs.writeFileSync('./books.json', JSON.stringify(json))
  res.json({ message: 'Book deleted successfully!' })
})

module.exports = router
