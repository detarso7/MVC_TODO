const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const Task = require('./models/Task')

const conn = require('./db/conn')

const taskRoutes = require('./routes/taskRoutes')

const showTask = require('./controllers/TaskController').showTask


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', taskRoutes)

app.use('/', showTask)


conn
.sync()
.then(() => {
    app.listen(3000, ()=>{
        console.log('Conectado na porta 3000')
    })
})
.catch((error)=>{
    console.log(error)
})
