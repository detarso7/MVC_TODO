const Task = require('../models/Task')

module.exports = class TaskController {

    static createTask (req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave (req, res) {

        const tasks = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        //Validações

        //Processar Dados

        await Task.create(tasks)

        res.redirect('/tasks')
    }

    static async removeTask (req, res) {

        const id = req.body.id

        await Task.destroy({where: {id: id}})

        res.redirect('/tasks')
    }

    static async showTask (req, res) {

       const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }

}