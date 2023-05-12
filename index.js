const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

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
