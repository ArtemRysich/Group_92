// npm install
// Щоб запустити локальний сервер потрібно в терміналі написати => npm start
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = express.Router();
const Model = require('./models/question');
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.listen(3000, (a) => {
    console.log(a)
    console.log(`Server Started at ${3000}`)
})
const db = 'mongodb+srv://arysich:oBe3d0ukBZX2xOyC@cluster0.plp6laf.mongodb.net/?retryWrites=true&w=majority';

mongoose
    .connect(db)
    .then(res => console.log('conneсt'))
    .catch(err => console.log(err));

router.post('/question', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        comment: req.body.comment
    })

    try {
        const saved = await data.save();
        res
            .status(201)
            .json(saved)
    } catch (err) {
        res
            .status(400)
            .json({ message: err.message })
    }

})

router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


