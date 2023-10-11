
const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, getSingleTask, editSingleTask, deleteSingleTask} = require('../controllers-app/tasks')

// router.route('/').get(getAllTasks)
// router.route('/').put(createTask)
// router.route('/:id').get(getSingleTask)
// router.route('/:id').patch(editSingleTask)
// router.route('/:id').delete(deleteSingleTask)

// OR we can use chaining
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(editSingleTask).delete(deleteSingleTask)

module.exports = router