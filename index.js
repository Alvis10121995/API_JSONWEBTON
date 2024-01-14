// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const mongoose = require('./conexion/conbd'); // Importa el archivo de conexión a MongoDB
const UserModel = require('./model/modelo'); // Importa el modelo de Usuario


 

// clave para firmar token
const Key = process.env.Key;
const port = process.env.port;



app.use(cors());
app.use(express.json()); // Middleware para analizar solicitudes JSON


app.get('/inicio', function (req, res) {
    res.send("Prueba de edpoind");
    });
    
    




// edpoind para agregar datos mongo DB
app.post('/add', function (req, res) {   
    const { nombre, edad } = req.body; 
     

    const nuevoUsuario = new UserModel({
        nombre: nombre,
        edad: edad,
      });


      


      nuevoUsuario.save().then( r => res.send(r)).catch( err => res.send(err))



})


app.post('/login', function (req, res) {

    const { username, password } = req.body;
    
    //test para validar que los datos ingresen bien 
    //console.log("datos"+username+" "+password)
    try {
    if( username ==="admin" && password ==="admin" ){

        const token = jwt.sign({ userId: username }, Key , {
            expiresIn: '10m',
            });
    
            res.status(200).json({ token });
    }
    }catch(error) {
        res.status(500).json({ error: 'Login failed' });
        }


    }


   
    );
    



app.get('/', function (req, res) {
res.send("Prueba de edpoind");
});








app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });