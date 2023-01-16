const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (request, response) => {
    const notes = await Note.find({})
    response.json(notes)
})

notesRouter.get('/:id', async (request, response, next) => {
    const note = await Note.findById(request.params.id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

notesRouter.post('/', async (request, response) => {
    const { content, important } = request.body

    const note = new Note({
        content: content,
        important: important || false,
        date: new Date()
    })
    const savedNote = await note.save()
    response.status(201).json(savedNote)
    next(error)

})

notesRouter.delete('/:id', async (request, response, next) => {
    const note = await Note.findById(request.params.id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
    next(error)
})

notesRouter.put('/:id', async (request, response, next) => {
    const { name, body } = request.body
    const note = await Note.findByIdAndUpdate(request.params.id)
    response.status(204).end()
    next(error)
})

module.exports = notesRouter