// 3.1 3.2 3.3 3.4 3.5 3.6 3.7 3.8 3.9 3.10 3.11 3.13 3.14 3.15 3.16 3.18 3.19 3.21 3.22
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')


const app = express()

morgan.token('data', function (req) { return JSON.stringify(req.body) })
app.use(cors())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(express.json())

app.get('/info', (request, response) => {
  Person.estimatedDocumentCount().exec((err, count) => {
    if (err) {
      request.send(err)
      return
    }

    const responseStr =
      `<p>Phone book has info for ${count} people</p>  
    <p>${new Date()}</p>`
    response.send(responseStr)
  })


})

app.get('/api/persons', (request, response, next) => {

  Person.find({})
    .then(persons => {
      response.json(persons)
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findOneById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findOneAndDelete({ '_id': request.params.id })
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({
      error: 'body missing'
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }

  // if (persons.filter(person => person.name === body.name).length) {
  //     return response.status(400).json({
  //         error: 'name must be unique'
  //     })
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => response.json(savedAndFormattedPerson))
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => updatedPerson.toJSON())
    .then(updatedAndFormattedPerson => response.json(updatedAndFormattedPerson))
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)