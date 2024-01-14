require('dotenv').config();
const mongoose = require('mongoose');


// URL de conexión a la base de datos en la nube


const dbUrl = process.env.dbUrl;;


// Conexión a la base de datos
mongoose.connect(dbUrl)
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Exportar el objeto de conexión para su uso en otros módulos
module.exports = mongoose.connection;



