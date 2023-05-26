const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('postgres://qflunxrb:alOsDAFSJOQt-skR4PJ0L4SuQLyE7mSk@silly.db.elephantsql.com/qflunxrb', { 
    dialect: 'postgres'
})

try { 

    sequelize.authenticate()
    console.log('Banco conectado!')
    
} catch (error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize