const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const Task = require('./models/Task')

const conn = require('./db/conn')

const taskRoutes = require('./routes/taskRoutes')


app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', taskRoutes)


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
