const Europe = require('../models/Europe')


const europeController = {
    index: (req, res) => {
        Europe.find({})
            .then((allEurope) => {
                res.send(allEurope)
            })
    },
   
    update: (req, res) => {
        Europe.findByIdAndUpdate(req.params.europeId, req.body)
            .then((editedEurope) => {
                editedEurope.save()
                res.send(editedEurope)
            })
    },
    delete: (req, res) => {
        Europe.findByIdAndDelete(req.params.europeId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {
        Europe.create(req.body)
            .then((newEurope) => {
                    res.send(newEurope)
                })
    }
}

module.exports = europeController