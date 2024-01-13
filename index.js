// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');

const Key = "pass2024";

const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware para analizar solicitudes JSON


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
res.send("Welocme to GeeksforGeeks!");
});








app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });