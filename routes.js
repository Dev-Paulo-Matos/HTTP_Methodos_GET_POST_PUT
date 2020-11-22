const express = require('express')
const fs = require('fs')
const routes = express.Router()
const data = require('./data.json')




routes.get('/Mostrarpacientes', (req, res) => {
    res.send(data)
})




routes.post('/pacientes', (req, res) => {
    const {
        name,
        peso,
        altura,
        id } = req.body

    data.paciente.push({
        name,
        peso,
        altura,
        id
    })
    fs.writeFileSync('data.json', JSON.stringify(data), (error) => {
        if (error) return res.status(400).json({ message: "error no bagui" })
    })
    return res.send(req.body)
})




routes.put('/updatePacientes/:id', (req, res) => {
    const pacienteProcurar = data.paciente.find(paciente => paciente.id == req.params.id)

    if (!pacienteProcurar) return res.status(404).json({ error: { message: "Patient not found" } })
    const paciente = {
        ...pacienteProcurar,
        ...req.body
    }
    
        
    
    data.paciente[req.params.id - 1] = paciente

    return res.json({ paciente})
    
})
module.exports = routes