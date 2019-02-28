const Africa = require('../models/Africa')


const africaController = {
    index: (req, res) => {
        Africa.find({})
            .then((allAfrica) => {
                res.send(allAfrica)
            })
    },
   
    update: (req, res) => {
        Africa.findByIdAndUpdate(req.params.africaId, req.body)
            .then((editedAfrica) => {
                editedAfrica.save()
                res.send(editedAfrica)
            })
    },
    delete: (req, res) => {
        Africa.findByIdAndDelete(req.params.africaId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {
        Africa.create(req.body)
            .then((newAfrica) => {
                    res.send(newAfrica)
                })
    }
}

module.exports = africaController