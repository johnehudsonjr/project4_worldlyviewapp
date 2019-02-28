const express = require('express')
const router = express.Router()
const europeController = require('../controllers/europeController')
const asiaController = require('../controllers/asiaController')
const africaController = require('../controllers/africaController')


router.get('/api/europe', europeController.index)
router.delete('/api/europe/:europeId', europeController.delete)
router.patch('/api/europe/:europeId', europeController.update)
router.post('/api/europe/', europeController.create)

// router.get('/api/africa', africaController.index)
// router.delete('/api/africa/:africaId', africaController.delete)
// router.patch('/api/africa/:africaId', africaController.update)
// router.post('/api/africa/', africaController.create)

// router.get('/api/asia', asiaController.index)
// router.delete('/api/asia/:asiaId', asiaController.delete)
// router.patch('/api/asia/:asiaId', asiaController.update)
// router.post('/api/asia/', asiaController.create)


module.exports = router