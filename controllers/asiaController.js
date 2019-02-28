const Asia = require('../models/Asia')


const asiaController = {
    index: (req, res) => {
        Asia.find({})
            .then((allAsia) => {
                res.send(allAsia)
            })
    },
   
    update: (req, res) => {
        Asia.findByIdAndUpdate(req.params.asiaId, req.body)
            .then((editedAsia) => {
                editedAsia.save()
                res.send(editedAsia)
            })
    },
    delete: (req, res) => {
        Asia.findByIdAndDelete(req.params.asiaId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {
        Asia.create(req.body)
            .then((newAsia) => {
                    res.send(newAsia)
                })
    }
}

module.exports = asiaController