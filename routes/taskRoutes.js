const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit/', TaskController.updateTask)
router.post('/remove', TaskController.removeTask)
router.get('/', TaskController.showTask)

module.exports = router