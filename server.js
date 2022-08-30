const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const turns = []

app.post('/turn', async (req, res) => {
    try {
        const turn = {
            turnOld: req.body.turnOld,
            paymentId: req.body.paymentId,
            amount: req.body.amount
        }
        if (req.headers.authorization == "pasanaq-user-pq1") {

            turns.push(turn)
            // res.json(req.headers.authorization)
            res.status(201).json({message: "Turno creado satisfactoriamente", headers: req.headers.authorization, turn})


        } else {
            res.send('el usuario no existe')
        }

    } catch {
        res.status(500).send()
    }
})

app.get('/turn', (req, res) => {
    res.json(turns)
})

app.listen(3000)