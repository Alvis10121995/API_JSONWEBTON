
const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
     });

  

const UserModel = mongoose.model("user",usuarioSchema)

module.exports = UserModel;

